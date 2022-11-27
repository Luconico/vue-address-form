
export default () => ({
    shippingForm: {
        fields: {
            name: {
                value: '',
                validations: ['required','minLength:2'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
                pattern: null,
            },
            phone: {
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