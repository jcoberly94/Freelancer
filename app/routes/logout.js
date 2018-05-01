import Route from '@ember/routing/route';
import {inject as service } from '@ember/service';

export default Route.extend({
    session: service('session'),
    beforeModel: function() {
      this.get('session').fetch().catch(function() {});
      this.get('session').close()
      this.transitionTo('index')
    },
    actions: {
      signOut: function() {
        this.get('session').close();
        this.transitionTo('index')
      }
    }
});
