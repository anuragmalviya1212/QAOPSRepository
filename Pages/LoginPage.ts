import {LoginPageLocators} from '../Locators/LoginPageLocators';
import { Page, expect } from '@playwright/test';
import LoginDataRaw from '../Data/LoginData.json';

export class LoginPage extends LoginPageLocators{
    private Dataset = JSON.parse(JSON.stringify(LoginDataRaw));

    constructor(page: Page) {
        super(page);
    }

    async navigateURL(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }
    async validLogin(){
        await this.usernameInput.fill(this.Dataset.Username);
        await this.passwordInput.fill(this.Dataset.Password);
        await this.userRadioButton.click();
        await this.dialogText.waitFor();
        const dialogText = await this.dialogText.textContent();
        expect(dialogText).toBe("You will be limited to only fewer functionalities of the app. Proceed?");
        await this.okayButton.click();
        await this.selectedTeacherCombobox.selectOption("Teacher");
        await this.termsAndConditionsCheckbox.check();
        await this.signInButton.click();
    }
}