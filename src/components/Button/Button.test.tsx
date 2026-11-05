import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('hat die Rolle button und einen zugänglichen Namen', () => {
    render(<Button>Speichern</Button>);
    expect(screen.getByRole('button', { name: 'Speichern' })).toBeInTheDocument();
  });

  it('ist standardmäßig type="button"', () => {
    render(<Button>Speichern</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('erlaubt type="submit" explizit', () => {
    render(<Button type="submit">Senden</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('löst onClick bei Mausklick aus', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Speichern</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('lässt sich per Tab fokussieren und mit Enter und Leertaste auslösen', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Speichern</Button>);
    await userEvent.tab();
    expect(screen.getByRole('button')).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('löst im deaktivierten Zustand nichts aus und ist nicht fokussierbar', async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Speichern</Button>);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    await userEvent.tab();
    expect(onClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).not.toHaveFocus();
  });

  it('reicht aria-Attribute durch', () => {
    render(<Button aria-describedby="hint">Löschen</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'hint');
  });

  it('leitet die ref an das button-Element weiter', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Speichern</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('ergänzt eine eigene className, ohne die internen Klassen zu entfernen', () => {
    render(<Button className="extra">Speichern</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('extra');
    expect(button.className.split(' ').length).toBeGreaterThan(1);
  });
});