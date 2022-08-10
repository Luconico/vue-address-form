
export default () => ({
    country: '',
    addressForm: {
        fields: {
            address: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
            },
            zipCode: {
                value: '',
                validations: ['required', 'minLength:5', 'maxLength:5'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
            },
            city: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
            },
            province: {
                value: '',
                validations: [],
                active: false,
                valid: false,
                type: 'select',
                validationFunction: null,
                mask: null,
            },
            moreInfo: {
                value: '',
                validations: [],
                active: true,
                valid: false,
                type: 'textarea',
                validationFunction: null,
                mask: null,
            },
        }
    },
    isValid: false,
    isFetching: false,
    selectOptions: [{}],
    formValues: {
        fields: {}
    },
})