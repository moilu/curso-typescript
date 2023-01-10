"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    const hormiga = new Avenger('Antman', 'Capitán', 'Scott Lang');
    console.log(hormiga);
    console.log(Avenger.avgAge);
})();
//# sourceMappingURL=main.js.map