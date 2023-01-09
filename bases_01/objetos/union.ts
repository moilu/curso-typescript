(()=> {

    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVar: ( string | number | Hero ) = 'Moises';

    console.log(typeof myCustomVar);


    myCustomVar = {
        name: 'Bruce',
        age: 40,
        powers: ['None']
    }

    console.log(typeof myCustomVar);

})()