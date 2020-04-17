export type FieldValidatorType = (value: string) => string | undefined

export const maxLength = (max: number): FieldValidatorType => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const required: FieldValidatorType = (value) => {
  return value ? undefined : 'Field is required'
}

export const email: FieldValidatorType = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
