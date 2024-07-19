import Ajv from 'ajv'

export const validateYaml = (yaml, schema) => {
  const ajv = new Ajv()
  const validate = ajv.compile(schema)
  const valid = validate(yaml)
  if (!valid) {
    const errors = validate.errors
    console.error('yaml: ', yaml)
    console.error('schema: ', schema)
    throw new Error(`YAML validation failed: ${JSON.stringify(errors)}`)
  }
}
