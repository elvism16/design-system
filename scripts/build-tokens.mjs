import { readFile, writeFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

/* ---------- Name-Transform: --ds-… ---------- */
StyleDictionary.registerTransform({
  name: 'name/ds',
  type: 'name',
  transform: (token) => {
    const [layer, ...rest] = token.path;
    const parts = layer === 'primitive' ? [layer, ...rest] : rest;
    return ['ds', ...parts].join('-');
  },
});

const transforms = [
  ...StyleDictionary.hooks.transformGroups.css.filter((t) => t !== 'name/kebab'),
  'name/ds',
];

/* ---------- Format: annotierte CSS-Datei für storybook-design-token ---------- */
const categoryOf = (token) => {
  const [layer, group] = token.path;
  if (layer === 'component') return 'Komponenten';
  if (group === 'color') return layer === 'primitive' ? 'Farben Primitive' : 'Farben Semantic';
  if (group === 'typography') return layer === 'primitive' ? 'Typografie Primitive' : 'Typografie Semantic';
  if (group === 'spacing') return 'Spacing';
  return 'Radius und Rahmen'; // radius, border-width, opacity
};

const presenterFor = (token) => {
  const p = token.path;
  const type = token.$type ?? token.type;
  if (type === 'color') return 'Color';
  if (type === 'fontFamily') return 'FontFamily';
  if (type === 'fontWeight') return 'FontWeight';
  if (p.includes('line-height')) return 'LineHeight';
  if (p.includes('letter-spacing')) return 'LetterSpacing';
  if (p.includes('opacity')) return 'Opacity';
  if (p.includes('size') || p.at(-1) === 'font-size') return 'FontSize';
  if (p.includes('spacing')) return 'Spacing';
  if (p.includes('radius')) return 'BorderRadius';
  return undefined;
};

StyleDictionary.registerFormat({
  name: 'css/annotated-docs',
  format: ({ dictionary }) => {
    const categories = new Map();
    for (const token of dictionary.allTokens) {
      const key = categoryOf(token);
      if (!categories.has(key)) categories.set(key, []);
      categories.get(key).push(token);
    }

    const lines = [
      '/* Nur für die Doku in Storybook (storybook-design-token). Nicht in die App einbinden. */',
      ':root {',
    ];

    for (const [category, tokens] of categories) {
      lines.push('', '  /**', `  * @tokens ${category}`, '  */', '');
      for (const token of tokens) {
        const value = token.$value ?? token.value;
        const original = token.original?.$value ?? token.original?.value;
        const ref =
          typeof original === 'string' && original.startsWith('{') ? `${original} ` : '';
        const presenter = presenterFor(token);
        const comment = `${ref}${presenter ? `@presenter ${presenter}` : ''}`.trim();
        lines.push(`  --${token.name}: ${value};${comment ? ` /* ${comment} */` : ''}`);
      }
    }

    lines.push('}', '');
    return lines.join('\n');
  },
});

/* ---------- Format: JSON der semantischen Farben für die Light/Dark-Tabelle ---------- */
StyleDictionary.registerFormat({
  name: 'json/docs-colors',
  format: ({ dictionary }) => {
    const tokens = dictionary.allTokens
      .filter((t) => t.path[0] === 'semantic' && t.path[1] === 'color')
      .map((t) => {
        const original = t.original?.$value ?? t.original?.value;
        return {
          name: `--${t.name}`,
          group: t.path[2],
          value: t.$value ?? t.value,
          reference: typeof original === 'string' ? original : null,
        };
      });
    return JSON.stringify(tokens, null, 2);
  },
});

/* ---------- Build-Helfer ---------- */
// Alles, was im Dark-Modus überschrieben wird: semantische Farben + Komponenten-Tokens
const isThemeToken = (token) =>
  token.path[0] === 'component' ||
  (token.path[0] === 'semantic' && token.path[1] === 'color');

const build = async ({ source, destination, format = 'css/variables', selector, filter }) => {
  const sd = new StyleDictionary({
    source: [source],
    usesDtcg: true,
    platforms: {
      css: {
        transforms,
        buildPath: 'tokens/build/',
        files: [
          {
            destination,
            format,
            filter,
            options: { selector, outputReferences: true },
          },
        ],
      },
    },
  });
  await sd.buildAllPlatforms();
};

/* ---------- 1. Themes für die App ---------- */
// Light: alle Tokens (Primitives, Semantic, Component) als Basis
await build({
  source: 'tokens/design-tokens.light.json',
  destination: 'theme-light.css',
  selector: ':root, [data-theme="light"]',
});

// Dark: nur das, was sich je Modus ändern kann
await build({
  source: 'tokens/design-tokens.dark.json',
  destination: 'theme-dark.css',
  selector: '[data-theme="dark"]',
  filter: isThemeToken,
});

/* ---------- 2. Doku für storybook-design-token ---------- */
await build({
  source: 'tokens/design-tokens.light.json',
  destination: 'design-tokens.docs.css',
  format: 'css/annotated-docs',
});

/* ---------- 3. Daten für die Light/Dark-Vergleichstabelle ---------- */
await build({
  source: 'tokens/design-tokens.light.json',
  destination: 'docs-colors.light.json',
  format: 'json/docs-colors',
});

await build({
  source: 'tokens/design-tokens.dark.json',
  destination: 'docs-colors.dark.json',
  format: 'json/docs-colors',
});

const light = JSON.parse(await readFile('tokens/build/docs-colors.light.json', 'utf8'));
const dark = JSON.parse(await readFile('tokens/build/docs-colors.dark.json', 'utf8'));
const darkByName = new Map(dark.map((t) => [t.name, t]));

const merged = light.map((t) => {
  const d = darkByName.get(t.name);
  return {
    name: t.name,
    group: t.group,
    light: { value: t.value, reference: t.reference },
    dark: { value: d?.value ?? null, reference: d?.reference ?? null },
    changed: d ? d.value !== t.value : false,
  };
});

await writeFile('tokens/build/semantic-colors.json', JSON.stringify(merged, null, 2));