import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Container } from '../../stories/Container';
import {
  componentIntents as buttonIntents,
  buttonVariants,
} from '@reactds/core';

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

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Variant: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Intent: Story = {
  args: {
    intent: 'success',
    children: 'Success',
  },
};

export const Size: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const Full: Story = {
  args: {
    full: true,
    children: 'This is a full Button',
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Pill: Story = {
  args: {
    pill: true,
    children: 'Pill Button',
  },
};

export const Gallery: Story = {
  render: () => {
    const variantsToBeShown = buttonVariants.filter(
      (variant) => variant.toLowerCase() !== 'inline-link',
    );
    return (
      <Container className="font-sans">
        <div className="flex gap-2">
          {variantsToBeShown.map((variant) => (
            <Container.Portion
              key={variant}
              title={variant}
              className="items-stretch"
            >
              {buttonIntents.map((intent) => (
                <Button
                  key={intent}
                  intent={intent}
                  variant={variant}
                  className="capitalize"
                >
                  {intent}
                </Button>
              ))}
            </Container.Portion>
          ))}
        </div>
        <Container.Portion title="Inline-links:" horizontal className="mt-4">
          {buttonIntents.map((intent) => (
            <Button key={intent} intent={intent} variant="inline-link">
              {intent}
            </Button>
          ))}
        </Container.Portion>
        <Container.Portion
          title="Full Button"
          className="w-3/4 border-dashed p-2 rounded-lg"
        >
          <Button full>This is a full button</Button>
        </Container.Portion>
        <Container.Portion title="Others:" horizontal className="mt-4">
          <Button disabled>Disabled</Button>
          <Button pill>Pill</Button>
        </Container.Portion>
      </Container>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
