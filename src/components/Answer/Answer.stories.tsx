// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";

import { Answer } from "./Answer";

const meta: Meta<typeof Answer> = {
  component: Answer,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "300px",
      },
    },
  },
  args: {
    text: "YES",
    isPositive: true,
  },
  argTypes: {
    isPositive: {
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Answer>;

export const Negative: Story = {
  args: {
    text: "NO",
    isPositive: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const items = await canvas.findAllByText(/no/i);
    expect(items).toHaveLength(9);

    const wrapperEl = await canvas.findByRole("paragraph");
    expect(wrapperEl).not.toHaveClass(/answerYes/i);
  },
};

export const Positive: Story = {
  args: {
    text: "YES",
    isPositive: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const items = await canvas.findAllByText(/yes/i);
    expect(items).toHaveLength(9);

    const wrapperEl = await canvas.findByRole("paragraph");
    expect(wrapperEl).toHaveClass(/answerYes/i);
  },
};

Positive.parameters = {
  backgrounds: { default: "dark" },
};
