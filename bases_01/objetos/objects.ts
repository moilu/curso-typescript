(()=> {

    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 29,
        powers: ['Super speed', 'Time travel']
    }

    flash = {
        name: 'Clark Kent',
        age: 35,
        powers: ['Fly', 'Strength', 'Laser eyes'],
        getName() {
            return this.name;
        }
    }

})()