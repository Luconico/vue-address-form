
export const isSubmitting = state => state.isSubmitting

export const isValid = state => state.isValid

export const submited = state => state.submited

export const isDisabled = state => (state.isSubmitting || state.submited)