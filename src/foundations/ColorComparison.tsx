import { useMemo, useState } from 'react';
import colors from '../../tokens/build/semantic-colors.json';
import styles from './ColorComparison.module.css';

type Mode = { value: string | null; reference: string | null };
type ColorToken = {
  name: string;
  group: string;
  light: Mode;
  dark: Mode;
  changed: boolean;
};

const tokens = colors as ColorToken[];

function Value({ mode }: { mode: Mode }) {
  return (
    <div className={styles.cell}>
      <span className={styles.swatch} aria-hidden="true">
        <span
          className={styles.swatchColor}
          style={{ backgroundColor: mode.value ?? undefined }}
        />
      </span>
      <span>
        <code>{mode.value}</code>
        {mode.reference && <small className={styles.ref}>{mode.reference}</small>}
      </span>
    </div>
  );
}

export function ColorComparison() {
  const [onlyChanged, setOnlyChanged] = useState(false);

  const visible = useMemo(
    () => tokens.filter((t) => !onlyChanged || t.changed),
    [onlyChanged],
  );
  const groups = [...new Set(visible.map((t) => t.group))];

  return (
    <div className={styles.root}>
      <label className={styles.toggle}>
        <input
          type="checkbox"
          checked={onlyChanged}
          onChange={(e) => setOnlyChanged(e.target.checked)}
        />
        Nur Tokens zeigen, die sich zwischen Light und Dark unterscheiden
      </label>
      <p className={styles.summary} aria-live="polite">
        {visible.length} von {tokens.length} Tokens
      </p>

      {groups.map((group) => (
        <section key={group}>
          <h3>{group}</h3>
          <table className={styles.table}>
            <caption className={styles.srOnly}>
              Semantische Farben der Gruppe {group}: Light- und Dark-Werte
            </caption>
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Light</th>
                <th scope="col">Dark</th>
              </tr>
            </thead>
            <tbody>
              {visible
                .filter((t) => t.group === group)
                .map((t) => (
                  <tr key={t.name}>
                    <th scope="row">
                      <code>{t.name}</code>
                      {t.changed && <span className={styles.badge}>geändert</span>}
                    </th>
                    <td><Value mode={t.light} /></td>
                    <td><Value mode={t.dark} /></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}