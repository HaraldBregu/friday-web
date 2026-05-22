import { expect, test } from "@playwright/test";

test("hero chat mockup is interactive", async ({ page }) => {
  await page.goto("http://127.0.0.1:4321/");
  const window = page.locator("[data-demo-window]").first();
  const input = window.locator("[data-demo-input]");

  await input.fill("Plan my next task");
  await window.locator(".composer-send").click();
  await expect(window.locator(".chat-bubble", { hasText: "Plan my next task" })).toBeVisible();
  await expect(window.locator(".chat-bubble", { hasText: "I can do that." })).toBeVisible();

  await window.locator("[data-demo-attach]").click();
  await expect(window.locator("[data-demo-attachment]")).toBeVisible();

  await window.locator("[data-demo-voice]").click();
  await expect(input).toHaveValue(/Summarize my morning/);
});
