(()=>{

    class Avenger {
        static avgAge: number = 35;
        constructor( 
            public name: string, 
            public team: string, 
            private realName: string
        ){}
        public bio(): string{
            return `${this.name} ${this.team}`;
        }
    }

    const hormiga = new Avenger('Antman', 'Capitán', 'Scott Lang');
    console.log(hormiga.bio());
    console.log(Avenger.avgAge);
})();