import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterUperCase():ValidatorFn{
  return(control:AbstractControl):ValidationErrors | null =>{
    const value = <string>control.value;

    if(!value || value.length === 0) {return null;}

     const firstLetter = value[0];

     if(firstLetter!== firstLetter.toUpperCase())
      {
        return {
          firstLetterUperCase: {
            message:'The first letter should be Capital'

          }
        }
      }

      return null;
  }

}

export function dateNotFuture(): ValidatorFn {
  return (control:AbstractControl):ValidationErrors | null =>{
    const selectedDate = new Date(control.value);
    const today = new Date();

    if(selectedDate > today){
      return{
        future: {
          message: 'The Date can not be at the future'
        }
      }
    }
    return null;
  }
}
