import { expect, describe, test } from "vitest";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { axe } from "vitest-axe";

import * as stories from "./Answer.stories";

const { Negative } = composeStories(stories);

describe("Answer", () => {
  test("should render correctly", async () => {
    await Negative.run();
    expect(screen.getByText("NO NO NO NO NO")).toBeInTheDocument();
    expect(await axe(document.body.firstChild)).toHaveNoViolations();
  });
});
