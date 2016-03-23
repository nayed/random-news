export class HomeController {
    constructor(randomNames) {
        this.name = 'World'
        this.random = randomNames
    }

    changeName() {
        this.name = 'Nayed'
    }

    randomName() {
        console.log(this.name)
        this.name = Promise.resolve(this.random.getName().$$state)
        console.log(this.name)
    }
}

HomeController.$inject = ['randomNames']