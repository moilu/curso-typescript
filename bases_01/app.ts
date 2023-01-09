
// Objetos
type SuperCar = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void 

}

const batimovil: SuperCar = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: SuperCar = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados

type Villain = {
  nombre: string,
  edad: (number | undefined),
  mutante: boolean
}

const villanos: Villain[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type XmensTeam = {
  poder: string,
  estatura: number
}

type VillainsTeam = {
  lider: true,
  miembros: string[]
}

const charles: XmensTeam = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: VillainsTeam = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: ( XmensTeam | VillainsTeam );

mystique = charles;
mystique = apocalipsis;
