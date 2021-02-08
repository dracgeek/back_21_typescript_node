export {}

/*let mensaje:string;
mensaje = 'Hola mundo geeks!';
console.log(mensaje);
console.log('-------------------------');

let a:number = 5;
let b:number = 10;
console.log(b);
 console.log('-------------------------');

 let matricualdo:boolean = null;
 let edad: number = 18;
 let nombre: string = 'Carolina Mejía';
 matricualdo = true;
 nombre.toLocaleUpperCase;

 let texto = `${nombre} está matriculada en el
 curso de backend y tiene ${edad} años. y esta matriculado? 
 ${matricualdo}`;
 console.log(texto);
 console.log('-------------------------');

 let nulo: null = null;
 let indefinido: undefined = undefined;
 let esEstudiante: boolean = null;
 let nombreEstudiante: string = undefined;
 console.log(esEstudiante);
 console.log(nombreEstudiante);
 console.log('-------------------------');
 
 let lista1: number[] = [1,2,3];
  let lista2: Array<number> = [4,5,6];
console.log(lista2[1]);
  console.log('-------------------------');

  let alumno1: [string,number] = ['Juan'];
 console.log(alumno1[0]);
 console.log('-------------------------');

 enum Color {Red, Green, Blue};
 let color: Color = Color.Blue;
 console.log(color);
 console.log('-------------------------');


 enum Direction {
    Up = 5,
    Down,
    Left,
    Right
} 
console.log(Direction['Up']);

let cualquiercosa: any = 8;
cualquiercosa = true;
cualquiercosa = 'Andrea';
console.log(cualquiercosa);

 let desconocido: unknown = 30;
 (desconocido as string);
 console.log(desconocido);


  function sumar(a:number,b:number= 5):number{
     if(b){
         return a+b;
     }else{
         return a;
     }
 }
 sumar(5);
 console.log('-------------------------');


 function datospersonales(usuario:{
     nombre:string,apellidos:string
 }){
     console.log(`${usuario.nombre} ${usuario.apellidos}`);
 }

 let usuario = {
     nombre:'Carolina',
     apellidos:'Serani'
 };
 datospersonales(usuario);


  interface Fruta{
     fruta:string;
     sabor?: string;
 }

 function atributosFruta(fruta:Fruta){
     console.log(`${fruta.fruta} ${fruta.sabor}`);
 }
 
 let f ={
     fruta:'Fresa',
 }
 atributosFruta(f);
 */


 class Pizza{
        tipoPizza:string;

    constructor(pizza:string){
        this.tipoPizza = pizza;
    }

    preparar(){
      console.log(`Prepaando pizza de ${this.tipoPizza}`);
    }
 }

 let p = new Pizza('Pollo con champiñones');
 console.log(p.tipoPizza);
 p.preparar();






 



 


 



  console.log('-------------------------');

  

