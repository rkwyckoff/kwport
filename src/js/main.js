import angular from 'angular';
import 'angular-ui-router';
 import 'angular-cookies';
 import 'angular-scroll';

import Config from './config';
import SERVER from './server'
import setup from './setup';
import LayoutController from './controllers/layout';

angular
  .module('app', ['ui.router', 'ngCookies', 'duScroll'])
  .config(Config)
  .run(setup)
  .constant('SERVER', SERVER)
  .controller('LayoutController', LayoutController)
