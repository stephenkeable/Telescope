Package.describe({
  summary: 'Welcome Page',
  version: '0.1.0',
  name: 'custom-welcome-page'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/welcome_page.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/welcome_page.html',
    'lib/client/templates/welcome_page.js',
    'lib/client/stylesheets/custom.scss'
  ], ['client']);

  // server
//
//   api.addFiles([
//     'lib/server/templates/custom_emailPostItem.handlebars'
//   ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
