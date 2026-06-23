import {LoginPageLocators} from '../Locators/LoginPageLocators';
import { Page, expect } from '@playwright/test';
import LoginDataRaw from '../Data/LoginData.json';

export class LoginPage extends LoginPageLocators{
    private Dataset = JSON.parse(JSON.stringify(LoginDataRaw));

    constructor(page: Page) {
        super(page);
    }

    async navigateURL(){
        try {
            await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/", { waitUntil: 'networkidle' });
            return this;
        } catch (error) {
            console.error('Navigation failed:', error);
            throw error;
        }
    }
    async validLogin(){
        try {
            await this.usernameInput.fill(this.Dataset.Username);
            await this.passwordInput.fill(this.Dataset.Password);
            await this.userRadioButton.click();
            await this.dialogText.waitFor({ timeout: 10000 });
            const dialogText = await this.dialogText.textContent();
            expect(dialogText).toBe("You will be limited to only fewer functionalities of the app. Proceed?");
            await this.okayButton.click();
            await this.selectedTeacherCombobox.selectOption("Teacher");
            await this.termsAndConditionsCheckbox.check();
            await this.signInButton.click();
            return this;
        } catch (error) {
            console.error('Login validation failed:', error);
            throw error;
        }
    }
}