
export default () => ({
    companyForm: {
        fields: {
            companyName: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
            },
            cif: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: 'nifSpain',
                mask: 'XXXXXXXX-A*',
            }
        }
    },
    isValid: false,
    selectOptions: [{}],
    fetching: false,
    formValues: {
        fields: {}
    },
})