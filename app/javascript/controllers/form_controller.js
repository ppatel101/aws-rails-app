
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
		let requiredFieldSelectors = 'textarea:required, input:required';
		let requiredFields = Array.from(this.formTarget.querySelectorAll(requiredFieldSelectors));

		requiredFields.sort((a, b) => {
				return Array.from(this.formTarget.elements).indexOf(a) - Array.from(this.formTarget.elements).indexOf(b);
		});

		for (let field of requiredFields) {
			if (!field.disabled && !field.value.trim()) {
				let fieldName = field.name.match(/\[(.*?)\]/)[1].replace(/_/g, ' '); 
				let errorMessageElement = document.getElementById(fieldName.replace(/ /g, "_") + "_error");
				if (errorMessageElement) {
					errorMessageElement.textContent = "Please enter valid " + fieldName;
				}
				field.focus();
				isValid = false;
				break;
			}
			if (!field.disabled && field.value.trim()) {
				let fieldName = field.name.match(/\[(.*?)\]/)[1].replace(/_/g, ' '); 
				let errorMessageElement = document.getElementById(fieldName.replace(/ /g, "_") + "_error");
				if (errorMessageElement) {
					errorMessageElement.textContent = "";
				}
				field.focus();
				isValid = true;
				break;
			}		
			
		}
		
		if (!isValid) {
			return false;
		}
		return isValid;
  }

	
}


