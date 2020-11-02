//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.
$(document).ready(function() {
    var bici = [
        {
            nome: 'bici-uno',
            peso: 5
        },
        {
            nome: 'bici-due',
            peso: 6
        },
        {
            nome: 'bici-tre',
            peso: 3
        },
        {
            nome: 'bici-quattro',
            peso: 6
        },
        {
            nome: 'bici-cinque',
            peso: 5
        }
    ]

    var numero_minimo = Math.min(5, 6, 3, 6, 5);
    console.log(numero_minimo);

    for (var i = 0; i < bici.length; i++) {
        console.log(bici[i].peso);
        if (bici[i].peso == numero_minimo) {
            console.log(bici[i].nome + ' è la bici con il peso minore');
        }
        else {
            console.log('non è la bici con il peso minore');
        }
    }
});
