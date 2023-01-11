(()=>{

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo() {
            console.log('Mundo a salvo');
        }
    }
    class Villain extends Mutante {
        conquistarMundo() {
            console.log('Mundo conquistado');
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');

    const printName = (character: Mutante) => {
        console.log(character);
    }

    // printName(wolverine);
    
})();