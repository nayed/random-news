import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './homeRoutes'
import {HomeController} from './homeController'
import randomPosts from '../../services/randomPostsService'
import greeting from '../../directives/greetingDirective'

import './home.css'

export default angular.module('appHome', [uirouter, randomPosts, greeting])
    .config(routing)
    .controller('HomeController', HomeController)
    .name