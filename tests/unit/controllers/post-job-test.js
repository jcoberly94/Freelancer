import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | post-job', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:post-job');
    assert.ok(controller);
  });
});
