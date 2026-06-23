import { PageObject } from "../POManager/PageObject";
import { test } from "@playwright/test";

test.describe("Login Functionality", () => {
    test("TC01: Verify that the user can login successfully with valid credentials", async ({ page }) => {
        const pageObject = new PageObject(page);
        await (await pageObject.loginToApplication()).navigateURL();
        await (await pageObject.loginToApplication()).validLogin();
    });
});