// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { FunkyToggleButton } from "./FunkyToggleButton";

const meta: Meta<typeof FunkyToggleButton> = {
  component: FunkyToggleButton,
  title: "components/Funky Toggle Button",
  args: {
    isToggledByDefault: false,
    onToggleFunkyMode: fn(),
  },
  argTypes: {
    isToggledByDefault: {
      table: { defaultValue: { summary: "false" } },
    },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

export default meta;
type Story = StoryObj<typeof FunkyToggleButton>;

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
