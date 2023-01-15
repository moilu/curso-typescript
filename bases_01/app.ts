// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelear():void;
}

const conducirBatimovil = ( auto: Car ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Car = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Clown {
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Clown = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: Clown ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface myFunction {
  (param: string[]): number;
}

const ciudadGotica: myFunction = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio():void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  public nombre: string;
  public edad: number;
  public sexo: string;
  public estadoCivil: string;
  
  imprimirBio() {

  }
}