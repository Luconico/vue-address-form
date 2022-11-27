
export default () => ({
    billingForm: {
        fields: {
            taxIdNumber: {
                value: '',
                validations: ['required','minLength:1', 'maxLength:20'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
                pattern: null,
            },
            collegiateNumber: {
                value: '',
                validations: [],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
                pattern: null,
            },
        }
    },
    isValid: false,
    selectOptions: [{}],
    fetching: false,
    formValues: {
        fields: {}
    },
})