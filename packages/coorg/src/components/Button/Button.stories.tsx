import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Container } from '../../stories/Container';

const meta = {
  title: 'Components/Primitives/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  render: () => {
    return (
      <Container>
        <Button>Button 1</Button>
        <Button intent="primary">Button 2</Button>
        <Button intent="primary" variant="outline">
          Button 3
        </Button>
        <Button disabled>Button 4</Button>
      </Container>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};

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
