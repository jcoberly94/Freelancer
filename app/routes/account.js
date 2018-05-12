import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service('session'),
    beforeModel: function() {
      return this.get('session').fetch().catch(function() {});
    },

    model() {
        return this.store.query('user', {
            orderBy: 'email',
            equalTo: this.get('session.currentUser.email')
        })
      }
});
