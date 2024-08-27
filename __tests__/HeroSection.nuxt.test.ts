import { expect, it } from "vitest";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";
import { HeroSection } from "#components";

it("component should mount", async () => {
  const component = await mountSuspended(HeroSection);
  expect(component.text()).toMatchInlineSnapshot(
    `"Flexify Your Workflow.  Streamline your projects with seamless tools that adapt to the way you work best."`
  );
});

it("component can be rendered", async () => {
  await renderSuspended(HeroSection);
  expect(screen.getByText(/Flexify/)).toBeDefined();
});
