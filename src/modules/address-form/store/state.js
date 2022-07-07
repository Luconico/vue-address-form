
export default () => ({
    addressForm: {
        saving: false,
        submited: false,
        fields: {
            address: {
                value: '',
                require: true,
                needed: true
            },
            country: {
                value: '',
                require: true,
                needed: true
            },
            postalCode: {
                value: '',
                require: true,
                needed: true
            },
            city: {
                value: '',
                require: true,
                needed: true
            },
            province: {
                value: '',
                require: true,
                needed: true
            },
            moreInfo: {
                value: '',
                require: true,
                needed: true
            },
        },
        messages: []
    },
    countries: [],
})