
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
            },
            postalCode: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text'
            },
            city: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text'
            },
            province: {
                value: '',
                validations: [],
                active: false,
                valid: false,
                type: 'select'
            },
            moreInfo: {
                value: '',
                validations: [],
                active: true,
                valid: false,
                type: 'textarea'
            },
        },
        messages: []
    },
    isValid: false,
    isFetching: false,
    selectOptions: [{}],
    formValues: {
        fields: {}
    },
})