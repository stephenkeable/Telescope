Meteor.startup(function () {
  Template.welcome_page.helpers({
    // If admin setting "enableWelcome" is true return true
    showWelcome: function () {
      if( Settings.get('enableWelcome', false) === false ){
        return false;
      }else{
        return true;
      }
    },
    // if user isn't logged in return TRUE
    notLoggedIn: function () {
      if (Meteor.user()) {
        return false;
        } else {
        return true;
        }
    }
  });
});
