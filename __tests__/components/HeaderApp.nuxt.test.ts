import { HeaderApp } from "#components";
import { expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

it("component should mount", async () => {
  const component = await mountSuspended(HeaderApp);
  expect(component.text()).contains("FlexyBe");
});

it("should have a link to the home page", async () => {
  const component = await mountSuspended(HeaderApp);
  const link = component.find("h1"); // The link is the h1 element
  expect(link.text()).toContain("FlexyBe");
});

it("should navigate to home page when you click the h1 element", async () => {
  const component = await mountSuspended(HeaderApp);
  const link = component.find("h1");
  await link.trigger("click");
  expect(component.vm.$route.path).toBe("/");
});

// TODO: Write a test to utilize the page prop
