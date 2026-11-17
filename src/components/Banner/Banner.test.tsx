import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Banner } from './Banner';

describe('Banner', () => {
  it('zeigt Headline und Fließtext', () => {
    render(<Banner headline="Gespeichert.">Alles erledigt.</Banner>);
    expect(screen.getByText('Gespeichert.')).toBeInTheDocument();
    expect(screen.getByText('Alles erledigt.')).toBeInTheDocument();
  });

  it.each([
    ['neutral', 'status'],
    ['success', 'status'],
    ['snack', 'status'],
    ['warning', 'alert'],
    ['error', 'alert'],
  ] as const)('setzt für %s die Rolle %s', (message, role) => {
    render(<Banner message={message}>Text</Banner>);
    expect(screen.getByRole(role)).toBeInTheDocument();
  });

  it('erlaubt, die Rolle zu überschreiben', () => {
    render(<Banner message="error" role="note">Text</Banner>);
    expect(screen.getByRole('note')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('rendert ohne onDismiss keinen Schließen-Button', () => {
    render(<Banner>Text</Banner>);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('ruft onDismiss per Maus, Enter und Leertaste auf', async () => {
    const onDismiss = vi.fn();
    render(<Banner onDismiss={onDismiss}>Text</Banner>);
    const button = screen.getByRole('button', { name: 'Schließen' });
    expect(button).toHaveAttribute('type', 'button');

    await userEvent.click(button);
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(onDismiss).toHaveBeenCalledTimes(3);
  });

  it('übernimmt ein eigenes dismissLabel', () => {
    render(<Banner onDismiss={() => {}} dismissLabel="Hinweis ausblenden">Text</Banner>);
    expect(screen.getByRole('button', { name: 'Hinweis ausblenden' })).toBeInTheDocument();
  });

  it('rendert keine leeren Container für fehlende Inhalte', () => {
    render(<Banner headline="Nur Headline" />);
    const headline = screen.getByText('Nur Headline');
    expect(headline.parentElement?.children).toHaveLength(1);
  });

  it('leitet ref und className weiter', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Banner ref={ref} className="extra">Text</Banner>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(ref.current).toHaveClass('extra');
    expect(ref.current?.className.split(' ').length).toBeGreaterThan(1);
  });
});
