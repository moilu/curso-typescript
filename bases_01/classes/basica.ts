(()=>{

    class Avenger {
        static avgAge: number = 35;
        constructor( 
            public name: string, 
            public team: string, 
            public realName: string
        ){}
        bio(): string{
            return `${this.name} ${this.team}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            team: string,
            realName: string,
            public isMutant: boolean
        ){
            super(name, team, realName);
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${this.name} ${this.realName}`;
        }

        set newName( name: string) {
            this.name = name;
        }
    }

    const hormiga = new Avenger('Antman', 'Capitán', 'Scott Lang');
    // const wolverine = new Xmen('Wolverine', 'Xmen', 'Logan', true);
    // console.log(hormiga.bio());
    // console.log(Avenger.avgAge);
    // console.log(wolverine.fullName);
    
})();