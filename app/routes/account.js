import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
    session: service('session'),
    beforeModel: function() {
      return this.get('session').fetch().catch(function() {});
    },

    model() {
        return RSVP.hash({
            user: this.store.query('user', {
                orderBy: 'email',
                equalTo: this.get('session.currentUser.email')
            }),
            bids: this.store.query('bid', {
                orderBy: 'freelancerID',
                equalTo: this.get('session.currentUser.email')
            }),
            jobs: this.store.findAll('job')
        })
      }
});
