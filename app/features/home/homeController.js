export class HomeController {
    constructor(randomNames) {
        this.name = 'World'
        this.random = randomNames
    }

    changeName() {
        this.name = 'Nayed'
    }

    randomName() {
        this.name = this.random.getName()
    }
}

HomeController.$inject = ['randomNames']