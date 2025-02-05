// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "components/Toggle Button",
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
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    isToggledByDefault: false,
  },
};
Default.storyName = "Not toggled";

export const Toggled: Story = {
  args: {
    isToggledByDefault: true,
  },
};
