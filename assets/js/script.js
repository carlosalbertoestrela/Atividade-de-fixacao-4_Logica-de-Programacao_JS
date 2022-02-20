// Funções:

//Atividade 1 ->
let imprimeImpar = (num) => {
    num = parseInt(num);
    let impares = []
    if (!num) {
        return alert("Digite um número inteiro válido");
    } else {
        let contador = 0;
        while (contador <= num) {
            if (contador % 2 != 0) {
                impares.push(contador);
            }
            contador++
        }
        return impares;
    }
}

//Atividade 2 ->
let tabuada = (num) => {
    num = parseInt(num);
    let tabuada = {}
    if ((!num || num < 0) && num != 0) {
        return alert("Digite um número inteiro válido");
    } else if ((num < 1 || num > 10) || num == 0) {
        return alert("Digite um número entrem 1 e 10!")
    } else {
        for (i = 1; i <= 10; i++) {
            tabuada[`${i} x ${num}`] = num * i;
        }
        return tabuada;
    }

}

// Atividade 3 ->
let geraLista = () => {
    lista = []
    lenLista = Math.floor(Math.random() * (7 - 5)) + 5;
    for (i = 0; i <= lenLista; i++) {
        lista.push(Math.floor(Math.random() * (99 - -99)) + -99)
    }
    return lista
}

let maior = (array) => {
    let max = array[0];
    for (i of array) {
        if (i > max) {
            max = i;
        }
    }
    return max;
}

let menor = (array) => {
    let min = array[0];
    for (i of array) {
        if (i < min) {
            min = i;
        }
    }
    return min;
}
let t = geraLista()


// interação com o DOM

// Atividade 1 >>
let = q1 = () => {
    const apresenta = document.querySelector("#apresenta");
    apresenta.innerHTML = imprimeImpar(50);
}

// Atividade 2 >>
let q2 = () => {
    const num = document.querySelector("#tabuada").value;
    const at2 = document.querySelector(".at2_answer");

    let tab = tabuada(num)
    let texto = ''
    for (i in tab) {
        texto += `${i} = ${tab[i]} \n`
    }

    at2.innerHTML = texto

}

// Atividade 3 >>
let l = geraLista();
let q3_1 = () => {
    const ver_lista = document.querySelector("#mostra_lista");
    ver_lista.innerHTML = l
}

let q3_2 = () => {
    let add_item = parseFloat(document.querySelector("#item").value);
    if(!add_item){
        alert("Campo vazio!")
    }
    else{
        l.push(add_item);
    }
    q3_1()
    document.getElementById("item").value = null
    q3_3()
}

let q3_3 = () =>{
    let mostra_item = document.querySelector("#mostra_final");
    mostra_item.innerHTML = `Maior = ${maior(l)}\nMenor = ${menor(l)}`
}
