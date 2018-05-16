import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';


export default Controller.extend({
    
    id: null,
    firebaseApp: inject('session'),

      bids: computed('id', 'model.bids', function() {
        let id = this.get('id');
        let bid = this.get('model.bids')
        return bid
      })
});