import angular from 'angular'

function greeting() {
    return {
        restrict: 'E',
        scope: {
            name: '='
        },
        template: '<h5>{{name}}</h1>'
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name