import { checkCommonValidations, checkCustomValidation } from '@/modules/forms/helpers/validation-utils';

describe('Validation utils - checkCommonValidations', () => {


    it('should return an error if the value is required and is empty', () => {
        const value = '';
        const validations = ['required'];

        const result = checkCommonValidations(value, validations);

        expect(result).toEqual({ msgType: 'error', value: `msg.required`, options: {} });
    });

    it('Should return an error if the minLength is not met', () => {
        const value = '12';
        const validations = ['minLength:3'];

        const result = checkCommonValidations(value, validations);

        expect(result).toEqual({ msgType: 'error', value: `msg.minLength`, options: { minLength: '3' } });
    });

    it('Should return an error if the maxLength is not met', () => {
        const value = '123456';
        const validations = ['maxLength:5'];

        const result = checkCommonValidations(value, validations);

        expect(result).toEqual({ msgType: 'error', value: `msg.maxLength`, options: { maxLength: '5' } });
    });
});


describe('Validation utils - checkCustomValidation', () => {

    it('should return an error if the nif is not valid', () => {
        const value = '123456A';
        const validationName = 'nifSpain';

        const result = checkCustomValidation(value, validationName);

        expect(result).toEqual({ msgType: 'error', value: `msg.nifNotValid` });
    });

});