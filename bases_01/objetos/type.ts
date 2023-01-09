(()=> {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 29,
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        },
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 37,
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        },
    }


})()