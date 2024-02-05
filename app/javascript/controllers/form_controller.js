import { Controller } from "@hotwired/stimulus";
export default class extends Controller {
	static targets = ['form'];

	submitForm() {
		let isValid = this.validateForm(this.formTarget);
		if (!isValid) {
			event.preventDefault();
		}
	}
	
	validateForm() {
		let isValid = true;
		let errorMessage = '';
		let requiredFieldSelectors = 'textarea:required, input:required';
		let requiredFields = Array.from(this.formTarget.querySelectorAll(requiredFieldSelectors));

		requiredFields.sort((a, b) => {
				return Array.from(this.formTarget.elements).indexOf(a) - Array.from(this.formTarget.elements).indexOf(b);
		});

	for (let field of requiredFields) {
    field.addEventListener('input', () => {
        const fieldName = field.name.match(/\[(.*?)\]/)[1].replace(/_/g, ' ');
        let errorMessageElement = document.getElementById(fieldName.replace(/ /g, "_") + "_error");
        if (errorMessageElement) {
            errorMessageElement.textContent = ""; // Clear the error message
        }
    });

    if (!field.disabled && !field.value.trim()) {
        const fieldName = field.name.match(/\[(.*?)\]/)[1].replace(/_/g, ' ');
        errorMessage = "Please enter valid " + fieldName;
        let errorMessageElement = document.getElementById(fieldName.replace(/ /g, "_") + "_error");
        if (errorMessageElement) {
            errorMessageElement.textContent = errorMessage;
        }
        console.log("Required field is empty:", field);
        field.focus();
        isValid = false;
        break;
    }
}


	if (!isValid) {
		return false;
	}

	return isValid;
}

}


