import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './appConfig'
import home from './features/home'

angular.module('app', [uirouter, home])
    .config(routing)