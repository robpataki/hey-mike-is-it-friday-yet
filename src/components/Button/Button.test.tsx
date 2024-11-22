import { test, expect } from "vitest";
import { screen } from "@testing-library/react";
// 👉 Using Next.js? Import from @storybook/nextjs instead
import { composeStories } from "@storybook/nextjs";

// Import all stories and the component annotations from the stories file
import * as stories from "./Button.stories";

// Every component that is returned maps 1:1 with the stories,
// but they already contain all annotations from story, meta, and project levels
const { Primary } = composeStories(stories);

test("renders the Skip to Main link with default args", async () => {
  await Primary.run();
  const buttonElement = screen.getByRole("button", {
    name: "Button",
  });
  expect(buttonElement).not.toBeNull();
});
