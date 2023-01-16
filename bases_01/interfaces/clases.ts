(()=>{

    interface Xmen {
        name: string;
        realName: string;
        mutantPower():string;
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        mutantPower() {
            return this.name + ' ' + this.realName;
        }
    }

})();