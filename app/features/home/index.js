import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './homeRoutes'
import {HomeController} from './homeController'

import './home.css'

export default angular.module('appHome', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .name