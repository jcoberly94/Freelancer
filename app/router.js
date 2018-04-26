import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('how-it-works');
  this.route('sign-up');
  this.route('login');
  this.route('find-work');
  this.route('privacy');
  this.route('terms');
});

export default Router;
