import angular from 'angular'

function greeting() {
    return {
        restrict: 'E',
        scope: {
            post: '='
        },
        template: `
            <h1>{{post.title}}</h1>
            <h3><a href="{{post.url}}" target="_blank">{{post.url}}</a></h3>
            <h5 ng-if="post.objectID"><a href="https://news.ycombinator.com/item?id={{post.objectID}}" target="_blank">Hacker News Thread</a></h5>
        `
    }
}

export default angular.module('directives.greeting', [])
    .directive('greeting', greeting)
    .name