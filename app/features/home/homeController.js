export class HomeController {
    constructor(randomPosts) {
        this.post = 'World'
        this.random = randomPosts
    }

    randomPost() {
        return this.random.getPost().then(res => {
            //console.log(res)
            this.post = res
            return res
        })
    }
}

HomeController.$inject = ['randomPosts']