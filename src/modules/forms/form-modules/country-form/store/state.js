
export default () => ({
    countryForm: {
        saving: false,
        submited: false,
        fields: {
            country: {
                value: '',
                required: true,
                active: true,
                error: false,
                type: 'select'
            }
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