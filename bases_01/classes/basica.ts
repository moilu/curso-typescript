(()=>{

    class Avenger {
        static avgAge: number = 35;
        constructor( 
            public name: string, 
            public team: string, 
            private realName: string
        ){}
    }

    const hormiga = new Avenger('Antman', 'Capitán', 'Scott Lang');
    console.log(hormiga);
    console.log(Avenger.avgAge);
})();