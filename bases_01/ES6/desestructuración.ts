(()=>{
    type Avengers = {
        nickFury: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;  
    }

    const avengers: Avengers = {
        nickFury: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1300 
    }

    const { vision, ...leftAvengers } = avengers;
    // console.log(vision.toUpperCase(), leftAvengers);

    const avengersArr = [
        'Capitán América',
        'Hulk',
        'Ironman'    
    ];
    const ironman = avengersArr[2];
    // console.log({ ironman });
})();