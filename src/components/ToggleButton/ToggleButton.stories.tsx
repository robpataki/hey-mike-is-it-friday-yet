// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";

import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  title: "components/Toggle Button",
  args: {
    isToggledByDefault: false,
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

export const NotToggled: Story = {
  args: {
    isToggledByDefault: false,
  },
};

export const Toggled: Story = {
  args: {
    isToggledByDefault: true,
  },
};
