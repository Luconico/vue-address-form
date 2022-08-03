
export default () => ({
    companyForm: {
        saving: false,
        submited: false,
        fields: {
            companyName: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
            },
            cif: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
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