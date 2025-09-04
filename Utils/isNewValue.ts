type value = string | number | undefined
type retunedValue = string | number | undefined

export const isNewValue = (new_value: value, old_value: value): retunedValue => {
    return new_value !== old_value ? new_value : undefined
}
