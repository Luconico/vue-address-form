
export const checkValidations = async (value, validations) => {
    if (validations.includes('required') && value.length === 0) {
        return { msgType: 'error', value: `msg.required` }
    }
}