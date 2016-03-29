import angular from 'angular'

const HTTP = new WeakMap()

class RandomPosts {
    constructor($http) {
        HTTP.set(this, $http)
        this.posts = []
    }

    getPost() {
        // return this.names[rand]
        //console.log(this.$http.get('http://hn.algolia.com/api/v1/search?tags=front_page'))
        let post = HTTP.get(this).get('http://hn.algolia.com/api/v1/search?tags=front_page')
            .then(res => {
                let datas = res.data.hits.map(post => this.posts.push(post))
                //console.log(this.posts)
                const totalPosts = this.posts.length
                const rand = Math.floor(Math.random() * totalPosts)
                //console.log(this.posts[rand])
                return this.posts[rand]
            })
        //console.log(post)
        return post
    }
}

export default angular.module('services.random-posts', [])
    .service('randomPosts', RandomPosts)
    .name