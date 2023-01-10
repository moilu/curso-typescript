"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    class Xmen extends Avenger {
        constructor(name, team, realName, isMutant) {
            super(name, team, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
    }
    const hormiga = new Avenger('Antman', 'Capitán', 'Scott Lang');
    const wolverine = new Xmen('Wolverine', 'Xmen', 'Logan', true);
    console.log(wolverine.bio());
})();
//# sourceMappingURL=main.js.map