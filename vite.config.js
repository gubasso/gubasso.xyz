import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import path from 'path'
import fs from 'fs'
import fg from 'fast-glob'

import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import yaml from 'js-yaml'

const getSchemaFile = (yamlFile) => {
  const dirname = path.dirname(yamlFile)
  const basename = path.basename(yamlFile, path.extname(yamlFile))
  const schemaFile = path.join(dirname, `${basename}-schema.json`)
  if (!fs.existsSync(schemaFile)) {
    throw new Error(`Schema file ${schemaFile} is required to validate the yaml file ${yamlFile}.`)
  }
  return schemaFile
}

const validateYaml = (yaml, schema) => {
  const ajv = new Ajv()
  addFormats(ajv)
  const validate = ajv.compile(schema)
  const valid = validate(yaml)
  if (!valid) {
    const errors = validate.errors
    throw new Error(`YAML validation failed: ${JSON.stringify(errors)}`)
  }
}

const validateYamlsPlugin = () => {
  return {
    name: 'validate-yamls-plugin',
    async buildStart() {
      const ignore = ['node_modules/**', 'build/**']
      const yamlFiles = await fg('**/*.yaml', { ignore })
      for (const yamlFile of yamlFiles) {
        const schemaFile = getSchemaFile(yamlFile)
        const yamlData = yaml.load(fs.readFileSync(yamlFile, 'utf8'))
        const schemaContent = JSON.parse(fs.readFileSync(schemaFile, 'utf8'))
        validateYaml(yamlData, schemaContent)
      }
      console.info('validateYamlsPlugin: All Yamls are validated.')
    }
  }
}

export default defineConfig({
  server: {
    fs: {
      allow: [path.resolve(__dirname, 'posts')]
    }
  },
  plugins: [sveltekit(), validateYamlsPlugin()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
})
