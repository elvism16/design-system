import StyleDictionary from 'style-dictionary';

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

const isThemeToken = (token) =>
  token.path[0] === 'component' ||
  (token.path[0] === 'semantic' && token.path[1] === 'color');

const build = async ({ source, destination, selector, filter }) => {
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
            format: 'css/variables',
            filter,
            options: { selector, outputReferences: true },
          },
        ],
      },
    },
  });
  await sd.buildAllPlatforms();
};

await build({
  source: 'tokens/design-tokens.light.json',
  destination: 'theme-light.css',
  selector: ':root, [data-theme="light"]',
});

await build({
  source: 'tokens/design-tokens.dark.json',
  destination: 'theme-dark.css',
  selector: '[data-theme="dark"]',
  filter: isThemeToken,
});