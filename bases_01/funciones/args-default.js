"use strict";
(() => {
    function fullName(firstName, lastName, toUpper = false) {
        if (toUpper) {
            return `${firstName} ${lastName || '---'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---'}`;
        }
    }
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
