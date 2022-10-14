
export const checkCommonValidations = (value, validations) => {
    if (validations.includes('required') && value.length === 0) {
        return { msgType: 'error', value: `msg.required`, options: {} }
    }

    if (validations.some(validation => /minLength/.test(validation))) {
        const minLength = validations.find(validation => /minLength/.test(validation)).split(':')[1]
        if (value.length < minLength)
            return { msgType: 'error', value: `msg.minLength`, options: { minLength } }
    }

    if (validations.some(validation => /maxLength/.test(validation))) {
        const maxLength = validations.find(validation => /maxLength/.test(validation)).split(':')[1]
        if (value.length > maxLength)
            return { msgType: 'error', value: `msg.maxLength`, options: { maxLength } }
    }
}

export const checkCustomValidation = (value, validationName) => {
    return customValidations[validationName](value)
}


const customValidations = {
    nifSpain: (value) => {
        const nifPattern = /^[0-9]{8}[a-zA-Z]$/
        if (!nifPattern.test(value)) return { msgType: 'error', value: `msg.nifNotValid` }
    },
    nifGermany: (value) => {
        const nifPattern = /^[0-9]{9}$/
        if (!nifPattern.test(value)) return { msgType: 'error', value: `msg.nifNotValid` }
    },
    nifFrance: (value) => {
        const nifPattern = /^[0-9]{11}$/
        if (!nifPattern.test(value)) return { msgType: 'error', value: `msg.nifNotValid` }
    }
}