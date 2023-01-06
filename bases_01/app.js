"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let nivelDePoder;
    (function (nivelDePoder) {
        nivelDePoder[nivelDePoder["acuaman"] = 0] = "acuaman";
        nivelDePoder[nivelDePoder["batman"] = 1] = "batman";
        nivelDePoder[nivelDePoder["flash"] = 5] = "flash";
        nivelDePoder[nivelDePoder["superman"] = 100] = "superman";
    })(nivelDePoder || (nivelDePoder = {}));
    const fuerzaAcuaman = nivelDePoder.acuaman;
    const fuerzaBatman = nivelDePoder.batman;
    const fuerzaFlash = nivelDePoder.flash;
    const fuerzaSuperman = nivelDePoder.superman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
