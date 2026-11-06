import { useEffect, useRef, useState, type CSSProperties } from 'react';
import styles from './Typography.module.css';

const STYLES = [
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'body',
  'body-strong',
  'body-small',
  'label',
  'caption',
] as const;

const SAMPLE = 'Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich';
const GLYPHS = '0123456789 € % & @ ? ! ß Ä Ö Ü';

const textStyle = (name: string): CSSProperties => ({
  fontFamily: `var(--ds-typography-${name}-font-family), system-ui, sans-serif`,
  fontSize: `var(--ds-typography-${name}-font-size)`,
  fontWeight: `var(--ds-typography-${name}-font-weight)`,
  lineHeight: `var(--ds-typography-${name}-line-height)`,
  letterSpacing: `var(--ds-typography-${name}-letter-spacing)`,
});

function FontStatus() {
  const [text, setText] = useState('wird geprüft …');

  useEffect(() => {
    let active = true;
    const raw = getComputedStyle(document.documentElement).getPropertyValue(
      '--ds-primitive-typography-family-sans',
    );
    const family = raw.split(',')[0].replace(/["']/g, '').trim();

    const update = () => {
      if (!active) return;
      const faces = [...document.fonts].filter(
        (f) => f.family.replace(/["']/g, '') === family,
      );
      const status = faces.length
        ? faces.map((f) => f.status).join(', ')
        : 'keine @font-face-Regel gefunden';
      setText(`Schrift „${family}“: ${status}`);
    };

    update();
    void document.fonts.ready.then(update);
    document.fonts.addEventListener('loadingdone', update);
    return () => {
      active = false;
      document.fonts.removeEventListener('loadingdone', update);
    };
  }, []);

  return <p className={styles.fontStatus}>{text}</p>;
}

function Row({ name, override }: { name: string; override: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [info, setInfo] = useState('');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const cs = getComputedStyle(el);
    const size = parseFloat(cs.fontSize);
    const lineHeight = parseFloat(cs.lineHeight);
    const ratio = Number.isNaN(lineHeight) ? cs.lineHeight : (lineHeight / size).toFixed(2);
    setInfo(
      `${cs.fontSize} · Gewicht ${cs.fontWeight} · Zeilenhöhe ${ratio} · Laufweite ${cs.letterSpacing}`,
    );
  }, [name, override]);

  return (
    <tr>
      <th scope="row">
        <code>{name}</code>
      </th>
      <td>
        <div ref={ref} style={textStyle(name)}>
          {SAMPLE}
        </div>
      </td>
      <td className={styles.values}>{info}</td>
    </tr>
  );
}

export function TypographySpecimen({
  textSpacingOverride = false,
}: {
  /** Wendet die Textabstände aus WCAG 1.4.12 an (Zeilenhöhe 1,5, Zeichen 0,12 em, Wörter 0,16 em) */
  textSpacingOverride?: boolean;
}) {
  return (
    <div className={`${styles.root} ${textSpacingOverride ? styles.override : ''}`}>
      <FontStatus />
      <table className={styles.table}>
        <caption className={styles.srOnly}>
          Typografie-Stile mit Beispieltext und berechneten Werten
        </caption>
        <thead>
          <tr>
            <th scope="col">Stil</th>
            <th scope="col">Beispiel</th>
            <th scope="col">Berechnete Werte</th>
          </tr>
        </thead>
        <tbody>
          {STYLES.map((name) => (
            <Row key={name} name={name} override={textSpacingOverride} />
          ))}
        </tbody>
      </table>
      <p style={textStyle('body')}>{GLYPHS}</p>
    </div>
  );
}