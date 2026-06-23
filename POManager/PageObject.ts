import { Page } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
export class PageObject {
    public readonly loginPage: LoginPage;
    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    loginToApplication() {
        return this.loginPage;
    }
}