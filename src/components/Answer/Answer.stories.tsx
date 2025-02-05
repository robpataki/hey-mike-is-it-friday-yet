// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { Answer } from "./Answer";

const meta: Meta<typeof Answer> = {
  component: Answer,
  title: "components/Answer",
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
};

export const Positive: Story = {
  args: {
    text: "YES",
    isPositive: true,
  },
};
Positive.parameters = {
  backgrounds: { default: "dark" },
};
