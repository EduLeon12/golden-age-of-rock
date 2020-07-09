// @ts-check

// CONVERTIDOR
const DOLLARPRICE = 1;
var converToPesos = amount => (amount * DOLLARPRICE);

function calculateTaxes (amount, tax) {
    var amountTax = 0;
    switch(tax){
        case 'IVA':
         amountTax = amount * 1.21;
         break;
        case 'PAIS':
         amountTax = amount * 1.30;
         break;
        default:
         amountTax = amount;
         break;    
    }
    return amountTax;
}

var localPrice = converToPesos();