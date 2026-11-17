import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import styles from './Banner.module.css';

export type BannerMessage = 'neutral' | 'success' | 'warning' | 'error' | 'snack';

export interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  /** Art der Meldung. Standard: neutral */
  message?: BannerMessage;
  /** Hervorgehobene Kurzaussage vor dem Fließtext */
  headline?: ReactNode;
  /** Fließtext der Meldung */
  children?: ReactNode;
  /** Wird beim Klick auf „Schließen“ aufgerufen. Ohne Handler gibt es keinen Schließen-Button. */
  onDismiss?: () => void;
  /** Zugänglicher Name des Schließen-Buttons. Standard: „Schließen“ */
  dismissLabel?: string;
}

/* Warnungen und Fehler unterbrechen Screenreader sofort, alles andere wird höflich angesagt.
   Über die Prop role lässt sich das überschreiben (z. B. role={undefined} für statische Hinweise). */
const defaultRole: Record<BannerMessage, 'alert' | 'status'> = {
  neutral: 'status',
  success: 'status',
  warning: 'alert',
  error: 'alert',
  snack: 'status',
};

export const Banner = forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      message = 'neutral',
      headline,
      children,
      onDismiss,
      dismissLabel = 'Schließen',
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = [styles.banner, styles[message], className].filter(Boolean).join(' ');

    return (
      <div ref={ref} role={defaultRole[message]} className={classes} {...rest}>
        <div className={styles.text}>
          {headline != null && <p className={styles.headline}>{headline}</p>}
          {children != null && <div className={styles.paragraph}>{children}</div>}
        </div>
        {onDismiss && (
          <button
            type="button"
            className={styles.close}
            aria-label={dismissLabel}
            onClick={onDismiss}
          >
            <span className={styles.closeIcon} aria-hidden="true" />
          </button>
        )}
      </div>
    );
  },
);

Banner.displayName = 'Banner';
