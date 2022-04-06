// camelCase
let ingredientesPizza = ["Harina", "Aceite", "Aceituna", "Jamón", "Tomate", "Queso", "Levadura", "Huevo", "Anana", "Panceta"];
// console.log(ingredientesPizza);

function dividirIngredientesPizza(ingredientes) {
    let pares = [];
    let impares = [];

    for ( const ingrediente of ingredientes ) {
        if (ingrediente.length % 2 == 0) {
            pares.push(ingrediente);
        } else {
            impares.push(ingrediente);
        }
    }

    console.log(`Los ingredientes pares son: ${pares}`);
    console.log(`Los ingredientes impares son: ${impares}`);
}

dividirIngredientesPizza(ingredientesPizza);
