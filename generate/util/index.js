module.exports = {
  description: 'Generates new util function',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the util function?",
      validate: function (value) {
        let message = true
        if (!/.+/.test(value)) {
          message = console.error('Missing', 'you must define a function name')
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
        path: 'src/utils/{{camelCase name}}/{{camelCase name}}.ts',
        templateFile: './generate/util/templates/function.hbs',
      },
      {
        type: 'add',
        path: 'src/utils/{{camelCase name}}/{{camelCase name}}.stories.mdx',
        templateFile: './generate/util/templates/docs.hbs',
      },
    ]
  },
}
