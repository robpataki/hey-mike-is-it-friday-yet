// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, expect, userEvent } from "@storybook/test";

import { FunkyToggleButton } from "./FunkyToggleButton";

const meta: Meta<typeof FunkyToggleButton> = {
  component: FunkyToggleButton,
  args: {
    isToggledByDefault: false,
    onToggleFunkyMode: fn(),
  },
  argTypes: {
    isToggledByDefault: {
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FunkyToggleButton>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonEl = canvas.getByRole("button", { name: /funky mode off/i });
    await expect(buttonEl).toBeInTheDocument();
    await expect(buttonEl).toHaveAttribute("aria-pressed", "false");
  },
};
Default.storyName = "Not toggled";

export const Toggled: Story = {
  args: {
    isToggledByDefault: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonEl = canvas.getByRole("button", { name: /funky mode on/i });
    await expect(buttonEl).toBeInTheDocument();
    await expect(buttonEl).toHaveAttribute("aria-pressed", "true");
  },
};
