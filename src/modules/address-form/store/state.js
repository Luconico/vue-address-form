
export default () => ({
    addressForm: {
        saving: false,
        submited: false,
        fields: {
            address: {
                value: '',
                require: true,
                needed: true,
                type: 'text',
            },
            postalCode: {
                value: '',
                require: true,
                needed: true,
                type: 'text'
            },
            city: {
                value: '',
                require: false,
                needed: true,
                type: 'text'
            },
            province: {
                value: '',
                require: false,
                needed: false,
                type: 'select'
            },
            moreInfo: {
                value: '',
                require: false,
                needed: true,
                type: 'textarea'
            },
        },
        messages: []
    },
    selectOptions: [],
})