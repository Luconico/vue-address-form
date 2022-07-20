const getCleanFormValues = (fields) => {
    const formValues = {}
    Object.keys(fields).forEach((key) => { if (fields[key].needed) formValues[key] = fields[key].value })
    return formValues
}

export default getCleanFormValues