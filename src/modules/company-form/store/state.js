
export default () => ({
    companyForm: {
        saving: false,
        submited: false,
        fields: {
            companyName: {
                value: '',
                require: true,
                needed: true,
                error: false,
                type: 'text',
            },
            cif: {
                value: '',
                require: true,
                needed: true,
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