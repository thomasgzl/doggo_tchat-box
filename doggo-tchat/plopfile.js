module.exports = function(plop) {
    // ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    plop.setGenerator('Generic Component', {
      description: 'Generate a generic component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your component ? (PascalCase)',
          validate: function(value) {
            if (/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(value)) {
              return true;
            }
            return 'Name is required in PascalCase';
          }
        }
      ],
      actions: function(data) {
        data.randomColor = `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
        const actions = [];
        actions.push(
          {
            type: 'add',
            path: 'src/{{dashCase name}}/{{dashCase name}}.vue',
            templateFile:
              'plop-templates/generic-component/generic-component.vue.hbs'
          }, {
            type: 'add',
            path: 'src/{{dashCase name}}/{{dashCase name}}.ts',
            templateFile:
              'plop-templates/generic-component/generic-component.ts.hbs'
          }, {
            type: 'add',
            path: 'src/{{dashCase name}}/{{dashCase name}}.css',
            templateFile:
              'plop-templates/generic-component/generic-component.css.hbs'
          },
          plop.renderString(
            `Your component has been created in the /src/ folder, move it where you want.
  You can now use your component with :
  import {{name}} from '@/xxxxxx/{{dashCase name}}/{{dashCase name}}.vue';
  or
  const {{name}} = defineAsyncComponent(() => import(/* webpackChunkName: "xxxxxx_{{dashCase name}}" */
  '@/xxxxxx/{{dashCase name}}/{{dashCase name}}.vue'));`,
            data
          )
        );
        return actions;
      }
    });
  };
  