import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { Banner, type BannerMessage } from './Banner';

const messages: BannerMessage[] = ['neutral', 'success', 'warning', 'error', 'snack'];

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    headline: 'Wartungsfenster am Samstag.',
    children: 'Zwischen 8 und 10 Uhr ist das Portal nicht erreichbar.',
    onDismiss: fn(),
  },
  argTypes: {
    message: { control: 'inline-radio', options: messages },
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ---------- Light ---------- */

export const Neutral: Story = { args: { message: 'neutral' } };

export const Success: Story = {
  args: {
    message: 'success',
    headline: 'Änderungen gespeichert.',
    children: 'Ihre Angaben sind ab sofort für das Team sichtbar.',
  },
};

export const Warning: Story = {
  args: {
    message: 'warning',
    headline: 'Sitzung läuft bald ab.',
    children: 'Speichern Sie Ihre Eingaben innerhalb der nächsten 5 Minuten.',
  },
};

export const ErrorMessage: Story = {
  name: 'Error',
  args: {
    message: 'error',
    headline: 'Upload fehlgeschlagen.',
    children: 'Die Datei ist größer als 20 MB. Bitte wählen Sie eine kleinere Datei.',
  },
};

export const Snack: Story = {
  args: {
    message: 'snack',
    headline: 'Eintrag gelöscht.',
    children: 'Der Eintrag wurde in den Papierkorb verschoben.',
  },
};

export const WithoutDismiss: Story = {
  args: { onDismiss: undefined },
  play: async ({ canvas }) => {
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  },
};

export const HeadlineOnly: Story = { args: { children: undefined } };

export const ParagraphOnly: Story = { args: { headline: undefined } };

export const LongContentWraps: Story = {
  args: {
    message: 'warning',
    headline: 'Neue Nutzungsbedingungen ab dem 1. Januar.',
    children:
      'Wir haben die Bedingungen für die Speicherung von Projektdaten überarbeitet. Bitte lesen Sie die Änderungen und bestätigen Sie sie bis spätestens Ende des Monats, damit Ihr Zugang ohne Unterbrechung weiter funktioniert.',
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '24rem' }}><Story /></div>],
};

export const DismissWithMouse: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Schließen' }));
    await expect(args.onDismiss).toHaveBeenCalledTimes(1);
  },
};

export const DismissWithKeyboard: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Schließen' })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onDismiss).toHaveBeenCalledTimes(2);
  },
};

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {messages.map((message) => (
        <Banner key={message} {...args} message={message} />
      ))}
    </div>
  ),
};

/* ---------- Dark ----------
   Eigene Stories, damit die a11y-Prüfung (axe, inkl. Kontrast) beide Modi abdeckt. */

export const OverviewDark: Story = {
  ...Overview,
  globals: { theme: 'dark' },
  tags: ['!autodocs'],
};
