import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-scroll';

import Config from './config';
import SERVER from './server'
import setup from './setup';



import LayoutController from './controllers/layout';
import EventController from './controllers/events';
import EventService from './services/event';

angular
  .module('app', ['ui.router', 'ngCookies', 'duScroll'])
  .config(Config)
  .run(setup)
  .constant('SERVER', SERVER)
  .service('EventService', EventService)
  .controller('LayoutController', LayoutController)
  .controller('EventController', EventController)
  .value('duScrollOffset', 125);
