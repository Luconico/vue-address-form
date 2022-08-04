
export default () => ({
    companyForm: {
        fields: {
            companyName: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
            },
            cif: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
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