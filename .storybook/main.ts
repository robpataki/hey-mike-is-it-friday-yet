import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/experimental-addon-test",
    "@chromatic-com/storybook",
    "@storybook/addon-a11y",
    "@storybook/addon-mdx-gfm",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  staticDirs: ["../public"],
  framework: "@storybook/experimental-nextjs-vite",
};
export default config;
