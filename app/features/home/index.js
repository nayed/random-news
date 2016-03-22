import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './homeRoutes'
import {HomeController} from './homeController'
import randomNames from '../../services/randomNamesService'
import greeting from '../../directives/greetingDirective'

import './home.css'

export default angular.module('appHome', [uirouter, randomNames, greeting])
    .config(routing)
    .controller('HomeController', HomeController)
    .name