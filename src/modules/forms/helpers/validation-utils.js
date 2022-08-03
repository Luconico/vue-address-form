
export const checkValidations = async (value, validations) => {
    if (validations.includes('required') && value.length === 0) {
        return { msgType: 'error', value: `msg.required`, options: {} }
    }

    if (validations.some(validation => /minLength/.test(validation))) {
        const minLength = validations.find(validation => /minLength/.test(validation)).split(':')[1]
        if (value.length < minLength) 
        return { msgType: 'error', value: `msg.minLength`, options: {minLength} }
    }

    if (validations.some(validation => /maxLength/.test(validation))) {
        const maxLength = validations.find(validation => /maxLength/.test(validation)).split(':')[1]
        if (value.length > maxLength)
        return { msgType: 'error', value: `msg.maxLength`, options: {maxLength} }
    }
}

