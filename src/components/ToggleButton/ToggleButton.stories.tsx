// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn, within, expect, userEvent } from "@storybook/test";

import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  args: {
    label: "Toggle is",
    isToggledByDefault: false,
    onChange: fn(),
  },
  argTypes: {
    isToggledByDefault: {
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonEl = canvas.getByRole("button", { name: /toggle is off/i });
    await expect(buttonEl).toBeInTheDocument();
    await expect(buttonEl.parentElement).toHaveAttribute("aria-live", "polite");
    await expect(buttonEl.parentElement).toHaveAttribute("aria-atomic", "true");
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
    const buttonEl = canvas.getByRole("button", { name: /toggle is on/i });
    await expect(buttonEl).toBeInTheDocument();
    await expect(buttonEl).toHaveAttribute("aria-pressed", "true");
  },
};

const mockPointerCallbackSpy = fn();
export const PointerInteraction: Story = {
  args: {
    onChange: mockPointerCallbackSpy,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonEl = canvas.getByRole("button", { name: /toggle is off/i });
    await userEvent.click(buttonEl);
    await expect(buttonEl).toHaveAttribute("aria-pressed", "true");
    await expect(buttonEl).toHaveAccessibleName(/toggle is on/i);
    await userEvent.click(buttonEl);
    await expect(buttonEl).toHaveAttribute("aria-pressed", "false");
    await expect(buttonEl).toHaveAccessibleName(/toggle is off/i);
    await expect(mockPointerCallbackSpy).toHaveBeenCalledTimes(2);
  },
};

const mockKeyboardCallbackSpy = fn();
export const KeyboardInteraction: Story = {
  args: {
    onChange: mockKeyboardCallbackSpy,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonEl = canvas.getByRole("button", { name: /toggle is off/i });
    buttonEl.focus();
    await expect(buttonEl).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(buttonEl).toHaveAttribute("aria-pressed", "true");
    await expect(buttonEl).toHaveAccessibleName(/toggle is on/i);
    await userEvent.click(buttonEl);
    await expect(buttonEl).toHaveAttribute("aria-pressed", "false");
    await expect(buttonEl).toHaveAccessibleName(/toggle is off/i);
    await expect(mockKeyboardCallbackSpy).toHaveBeenCalledTimes(2);
  },
};
