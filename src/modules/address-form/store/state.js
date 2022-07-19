
export default () => ({
    addressForm: {
        saving: false,
        submited: false,
        fields: {
            address: {
                value: '',
                require: true,
                needed: true,
                error: false,
                type: 'text',
            },
            postalCode: {
                value: '',
                require: true,
                needed: true,
                error: false,
                type: 'text'
            },
            city: {
                value: '',
                require: false,
                needed: true,
                error: false,
                type: 'text'
            },
            province: {
                value: '',
                require: false,
                needed: false,
                error: false,
                type: 'select'
            },
            moreInfo: {
                value: '',
                require: false,
                needed: true,
                error: false,
                type: 'textarea'
            },
        },
        messages: []
    },
    selectOptions: [],
    fetching: false,
})