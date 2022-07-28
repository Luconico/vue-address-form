
export default () => ({
    country: '',
    addressForm: {
        saving: false,
        submited: false,
        fields: {
            address: {
                value: '',
                required: true,
                active: true,
                error: false,
                type: 'text',
            },
            postalCode: {
                value: '',
                required: true,
                active: true,
                error: false,
                type: 'text'
            },
            city: {
                value: '',
                required: false,
                active: true,
                error: false,
                type: 'text'
            },
            province: {
                value: '',
                required: false,
                active: false,
                error: false,
                type: 'select'
            },
            moreInfo: {
                value: '',
                required: false,
                active: true,
                error: false,
                type: 'textarea'
            },
        },
        messages: []
    },
    selectOptions: [{}],
    fetching: false,
    formValues: {
        fields: {},
        messages:[]
    },
})