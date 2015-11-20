// Custom Setting Field

Settings.addField({
  fieldName: 'enableWelcome',
    fieldSchema: {
      type: Boolean,
      optional: true,
      autoform: {
        group: 'welcomepage',
        instructions: 'Enable welcome page (requires restart).'
      }
    }
});

Telescope.modules.add("contentTop", {
  template: 'welcome_page',
  order: 1,
  only: ["postsDefault"]
});
