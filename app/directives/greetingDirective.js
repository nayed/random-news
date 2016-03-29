import angular from 'angular'

function greeting() {
    return {
        restrict: 'E',
        scope: {
            post: '='
        },
        template: '<h5>{{post}}</h1>'
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name