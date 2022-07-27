
export default () => ({
    companyForm: {
        saving: false,
        submited: false,
        fields: {
            companyName: {
                value: '',
                required: true,
                active: true,
                error: false,
                type: 'text',
            },
            cif: {
                value: '',
                required: true,
                active: true,
                error: false,
                type: 'text',
            }
        },
        messages: []
    },
    selectOptions: [],
    fetching: false,
    formValues: {
        fields: {},
        messages:[]
    },
})