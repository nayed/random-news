export class HomeController {
    constructor(randomNames) {
        this.name = 'World'
        this.random = randomNames
    }

    changeName() {
        this.name = 'Nayed'
    }

    randomName() {
        return this.random.getName().then(res => {
            //console.log(res)
            this.name = res
            return res
        })
    }
}

HomeController.$inject = ['randomNames']