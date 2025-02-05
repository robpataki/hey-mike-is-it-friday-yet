import { /* vi,  */ expect, test } from "vitest";
// import { axe } from "vitest-axe";
import { screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ToggleButton.stories";

const { Default /* , Toggled */ } = composeStories(stories);

test("renders toggle button with custom children", async () => {
  await Default.run();
  expect(
    screen.getByRole("button", { name: /Toggle is OFF/i })
  ).toBeInTheDocument();
  // @ts-expect-error TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  // expect(await axe(document.body.firstChild)).toHaveNoViolations();
});

/* test("onclick handler is called", async () => {
  const onClickSpy = vi.fn();
  await Default.run({ args: { ...Default.args, onClick: onClickSpy } });
  const buttonElement = screen.getByRole("button");
  buttonElement.click();
  expect(onClickSpy).toHaveBeenCalled();
});
 */
