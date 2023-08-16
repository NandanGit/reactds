import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Container } from '../../stories/Container';
import {
  componentIntents as buttonIntents,
  buttonVariants,
} from '@reactds/core';
import { capitalize } from '../../stories/utils/string';

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
          <Button
            className="w-full" //
            // intent="info"
            // variant="outline"
            size="lg"
          >
            This is a full button
          </Button>
        </Container.Portion>
      </Container>
    );
  },
  parameters: {
    layout: 'fullscreen',
  },
};
