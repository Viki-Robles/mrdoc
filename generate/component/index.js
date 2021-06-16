module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Component?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error('Missing', 'you must define a component name')
        } else if (value.length < 3) {
          message = console.error(
            'Too Short',
            `"${value}" is not descriptive enough`,
          )
        }
        return message
      },
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generate/component/templates/component.hbs',
      },

      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.docs.mdx',
        templateFile: './generate/component/templates/docs.hbs',
      },
    ]
  },
}
