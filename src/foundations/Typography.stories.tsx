import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographySpecimen } from './Typography';

const meta = {
  title: 'Foundations/Typography',
  component: TypographySpecimen,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof TypographySpecimen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  globals: { theme: 'dark' },
};

export const TextSpacingWcag: Story = {
  args: { textSpacingOverride: true },
};