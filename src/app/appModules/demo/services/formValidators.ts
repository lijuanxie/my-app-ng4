import { FormControl, ValidationErrors } from "@angular/forms";

export const formValidators = {

    hasletter: (control: FormControl): ValidationErrors => {
        if (!(/[a-zA-Z]+/).test(control.value)) {
            return { hasletter: true, error: true };
        }
        return null;
    }
};