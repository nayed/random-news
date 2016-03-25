export class HomeController {
    constructor(randomNames) {
        this.name = 'World'
        this.random = randomNames
    }

    changeName() {
        this.name = 'Nayed'
    }

    randomName() {
        //console.log(this.name)
        // this.name = this.random.getName().then(response => {
        //     console.log(response)
        //     return response
        // })
        let callback = {
            success: function(data) {
                console.log(1, 'success', JSON.parse(data))
            },
            error: function(data) {
                console.log(2, 'error', JSON.parse(data))
            }
        }
        this.name = Promise.resolve(this.random.getName())
            .then(callback.success)
            .catch(callback.error)
        console.log(this.name)
        return this.name
    }
}

HomeController.$inject = ['randomNames']