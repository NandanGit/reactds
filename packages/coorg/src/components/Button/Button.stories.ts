import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variant: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Intent: Story = {
  args: {
    intent: 'secondary',
    children: 'Button',
  },
};

export const Size: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};
