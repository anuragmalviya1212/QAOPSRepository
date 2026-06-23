import { Page, Locator } from '@playwright/test';
export class LoginPageLocators {
    public readonly page: Page;
    public readonly usernameInput: Locator;
    public readonly passwordInput: Locator;
    public readonly userRadioButton: Locator;
    public readonly dialogText: Locator;
    public readonly okayButton: Locator;
    public readonly selectedTeacherCombobox: Locator;
    public readonly termsAndConditionsCheckbox: Locator;
    public readonly signInButton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username:');
        this.passwordInput = page.getByLabel('Password:');
        this.userRadioButton = page.getByRole('radio', { name: ' User', exact: true });
        this.dialogText = page.getByText("You will be limited to only fewer functionalities of the app. Proceed?");
        this.okayButton = page.getByRole('button', {name: 'Okay', exact: true});
        this.selectedTeacherCombobox = page.locator("//select[@class='form-control']");
        this.termsAndConditionsCheckbox = page.getByRole("checkbox", { name: "I Agree to the" });
        this.signInButton = page.getByRole("button", { name: "Sign In", exact: true });

    }
}