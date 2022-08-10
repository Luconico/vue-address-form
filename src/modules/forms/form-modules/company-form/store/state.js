
export default () => ({
    companyForm: {
        fields: {
            companyName: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: null,
                mask: null,
            },
            cif: {
                value: '',
                validations: ['required'],
                active: true,
                valid: false,
                type: 'text',
                validationFunction: (dni) => {
                    if (dni.length !== 9) {
                        return { msgType: 'warning', value: 'El CIF suele tener 9 dígitos' };
                    }
                },
                mask: 'XXXXXXXX-A*',
            }
        }
    },
    isValid: false,
    selectOptions: [{}],
    fetching: false,
    formValues: {
        fields: {}
    },
})