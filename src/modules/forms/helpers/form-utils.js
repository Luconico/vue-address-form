
export const getCleanFormValues = (fields) => {
    const formValues = {}
    Object.keys(fields).forEach((key) => { if (fields[key].active) formValues[key] = fields[key].value })
    return formValues
}
