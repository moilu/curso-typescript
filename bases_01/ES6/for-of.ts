(()=> {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Tony',
        weapon: 'Armored suit'
    } 
    const captainAm: Avenger = {
        name: 'Steve',
        weapon: 'Shield'
    } 
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    } 

    const avengers: Avenger[] = [ ironman, captainAm, thor ];
    
    // for (const avenger of avengers) {
    //     console.log(avenger);
    // }
})();