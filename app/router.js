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
  this.route('privacy');
  this.route('terms');
  this.route('find-work');
  this.route('logout');
  this.route('account');
  this.route('post-job');
  this.route('jobs');
});

export default Router;
