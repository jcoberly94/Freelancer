import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    session: service('session'),
    beforeModel: function() {
      return this.get('session').fetch().catch(function() {});
    },
    actions: {
      signIn: function(email, password) {
        this.get('session').open('firebase', {
            provider: 'password',
            email: email,
            password: password
          }).then((data) => {
            this.transitionTo('index')
          }).catch((err) => {
          });
      },
      signOut: function() {
        this.get('session').close();
        this.transitionToRoute('index')
      }
    }
});


