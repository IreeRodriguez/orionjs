import ValidationError from './ValidationError'
import getValidationErrors from './getValidationErrors'

export default async function(schema, doc) {
  const validationErrors = await getValidationErrors(schema, doc)
  if (validationErrors) {
    throw new ValidationError(validationErrors)
  }
}
