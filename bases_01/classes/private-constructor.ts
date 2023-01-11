(()=>{

    class Apocalipsis {
        static instance:Apocalipsis;

        private constructor(
            public name: string
        ){}

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único');
            }
            return Apocalipsis.instance;
        }

        public changeName(newName: string) {
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    apocalipsis1.changeName('Soy Xavier');

    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    
})();