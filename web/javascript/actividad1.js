//Actividad 1 JavaScript


//Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function CharacterData(){
    console.log("Funcion 1");
    let string = 'abacddbec';

    for (let i =0; i< string.length; i++){
        if((string.split(string[i]).length -1) == 1){
            console.log(string[i]);
            break;
        }
}}

//Escribe una función que revise si una cadena de texto es un palíndromo o no.
function Palindrome(){
    console.log("Funcion 10");
    let string = 'somos';
    for (let i =0; i< string.length; i++){
        if (string[i] == string[string.length -1 -i]){
            console.log("Es palindromo");
        }
        else{
            console.log("No es palindromo");
        }
    }
}

//Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function MedianaModa(){
    console.log("Funcion 12");
    let lista = [1,2,3,4,5,6,7,8,9,10];
    let mediana = zlista.length/2;
    let moda = 0;
    let modeCount = 0;

    if (lista.length % 2 == 0){
        mediana = (lista[int(mediana.length/2)] + lista[int(mediana.length)])/2;
    }
    else{
        mediana = lista[mediana];
    }
    console.log("La mediana es: " + mediana);
    for(let i = 0; i<lista.length; i++){
        if((lista.split(lista[i]).length -1) - 1 > modeCount){
            moda = lista[i];
            modeCount = (lista.split(lista[i]).length -1) - 1;
        }
    }
    console.log("La moda es: " + moda);
}






CharacterData();
MedianaModa();
