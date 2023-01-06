(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    
    enum nivelDePoder {
      acuaman = 0,
      batman = 1,
      flash = 5,
      superman = 100
    }
    const fuerzaAcuaman: nivelDePoder = nivelDePoder.acuaman;
    const fuerzaBatman: nivelDePoder = nivelDePoder.batman;
    const fuerzaFlash: nivelDePoder = nivelDePoder.flash;
    const fuerzaSuperman: nivelDePoder = nivelDePoder.superman;
  
    // Retorno de funciones
    function activar_batiseñal(): string {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  