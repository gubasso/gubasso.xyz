# projects_page (Issue)

```js
import { readFileSync } from 'fs'
const yamlContent = yaml.load(readFileSync(filePath, 'utf8'))
const schema = JSON.parse(readFileSync(filePath, 'utf8'))
```

```js
// svelte.config.js
import yaml from 'js-yaml'
import { loadSchema, validateYaml } from './src/lib/validation.js'

const yamlPlugin = {
  name: 'yaml-validator',
  async buildStart() {
    try {
      const yamlFiles = ['./src/data/file1.yml', './src/data/file2.yml']
      const schemaFile = './src/schemas/schema.json'

      const schema = await loadSchema(this.resolve(schemaFile))

      for (const file of yamlFiles) {
        const yamlContent = await loadYaml(this.resolve(file))
        validateYaml(yamlContent, schema)
      }
    } catch (err) {
      this.error(err)
    }
  }
}

export default {
  kit: {
    vite: {
      plugins: [yamlPlugin]
    }
  }
}
```


- each yaml has to be shown... has to have some Utility... do this checklist when refactoring the resume

## resume sections refactor

- experiences:
  - bring summaries + bullets from roles + projects

## backlog

- r
- project section (resume and page)
  - bring tags from skills (#)

- skills-items are the groups!
  - "Skills-grid"
    - grid 1: skills (#tags)
    - grid 2: tags
  - show in a grid

- [ ] refactor yaml structure
  - skills-tags -> add group inside each tag

https://img.shields.io/badge/{label}-{color}?style={style}&logo={logo}&logoColor={logoColor}


- [ ] remove anchor tags from yaml and put only in html

projects_page : project's page
  - [ ] grid model

- [x] resume structure refactor
- [x] grammar correction for all yaml
- [x] building yamls schemas for data validation
- [x] review projects.yaml
- [x] review skills: are they really skills or roles?
- [x] change naming conventions
- [x] change skills hardcoded years
