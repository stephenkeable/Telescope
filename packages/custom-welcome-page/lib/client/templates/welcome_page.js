Meteor.startup(function () {
  Template.welcome_page.helpers({
    showWelcome: function () {
      // note: should not be reactive
      if(
            Settings.get('enableWelcome', false) === false
        ||  !Users.can.view(Meteor.user())
        ||  Cookie.get('enableWelcome') === "no"
        ||  (Meteor.user() && Meteor.user().getSetting('welcomepage.enableWelcome', true) === false)
      ){
        return false;
      }else{
        return true;
      }
    }
  });
});
