import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    session: service('session-account'),
    beforeModel: function() {
      return this.get('session').fetch().catch(function() {});
    },
    actions: {
      signIn: function(provider) {
        this.get('session').open('firebase', {
            provider: 'password',
            email: 'test@example.com',
            password: 'password1234'
          });
      },
      signOut: function() {
        this.get('session').close();
      }
    }
});


