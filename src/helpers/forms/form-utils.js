
export const getCleanFormValues = (fields) => {
    const formValues = {}
    Object.keys(fields).forEach((key) => { if (fields[key].active) formValues[key] = fields[key].value })
    return formValues
}

export const checkErrorMessages = (fields) => {
    const messages = []
    Object.keys(fields).forEach((key) => {
        if (!fields[key].active) return
        fields[key].error = false

        if (fields[key].validations.includes('required') && fields[key].value === '') {
            fields[key].error = true
            messages.push({ msgType: "error", value: `msg.${key}Required` })
        }
        
    })
    return messages
}