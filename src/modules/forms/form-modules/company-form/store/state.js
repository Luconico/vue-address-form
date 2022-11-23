
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
                pattern: null,
            },
            phone: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
                pattern: null,
            },
            cif: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: 'nifSpain',
                mask: 'XXXXXXXX-A*',
                pattern: '########A',
            },
            colegiate: {
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