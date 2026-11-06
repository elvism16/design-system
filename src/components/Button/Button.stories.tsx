import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Speichern',
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'outline'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ---------- Light ---------- */

export const Primary: Story = { args: { variant: 'primary' } };

export const Outline: Story = { args: { variant: 'outline' } };

export const PrimaryDisabled: Story = {
  args: { variant: 'primary', disabled: true },
};

export const OutlineDisabled: Story = {
  args: { variant: 'outline', disabled: true },
};

export const Overview: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="primary" disabled>Primary</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="outline" disabled>Outline</Button>
    </div>
  ),
};

export const KeyboardActivation: Story = {
  play: async ({ canvas, args }) => {
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: 'Speichern' })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    await expect(args.onClick).toHaveBeenCalledTimes(2);
  },
};

/* ---------- Dark ----------
   Eigene Stories, damit die a11y-Prüfung (axe, inkl. Kontrast) beide Modi abdeckt.
   '!autodocs' hält sie aus der Docs-Seite heraus, weil der Theme-Decorator dort
   sonst die ganze Seite auf Dark umstellen würde. */

export const PrimaryDark: Story = {
  args: { variant: 'primary' },
  globals: { theme: 'dark' },
  tags: ['!autodocs'],
};

export const OutlineDark: Story = {
  args: { variant: 'outline' },
  globals: { theme: 'dark' },
  tags: ['!autodocs'],
};

export const OverviewDark: Story = {
  ...Overview,
  globals: { theme: 'dark' },
  tags: ['!autodocs'],
};