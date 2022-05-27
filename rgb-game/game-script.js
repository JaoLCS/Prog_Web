//Gera as cores e a resposta;
function color_gen(){

    var aux = document.getElementById("color")

    var r = getRandomInt(1,255);
    var g = getRandomInt(1,255);
    var b = getRandomInt(1,255);

    var color = "rgb(" + r + "," + g + "," + b + ")";
    aux.innerHTML = color;

    var options = [color];
    for(let z = 0; z<5;z++){
        r = getRandomInt(1,255);
        g = getRandomInt(1,255);
        b = getRandomInt(1,255);

        var option = "rgb(" + r + "," + g + "," + b + ")";
        options[z+1] = option;
        if(z === 0){
            aux = document.getElementById("option"+z);
        }else{
            aux = document.getElementById("option"+z);
        }
    }
    var random_options = randomArray(options);
    print_options(random_options, color);
}
document.onload = color_gen();

//gera aleatoriamente um número entre 1 e 255
function getRandomInt(min, max){
    var max = Math.floor(max);
    var min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//randomiza o array das opções
function randomArray(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
        const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }   
    // Retornando array com aleatoriedade
    return arr;
}

//exibe as opções já randomizadas
function print_options(options,color){
    for(let x= 0; x<options.length;x++){
        aux = document.getElementById("option"+x);
        aux.style.backgroundColor = options[x];
        if(options[x] === color){
            aux.innerHTML = "opção correta";
        }
    }
}

//escolhe cor e compara com a resposta
function pick_color(chose){
    aux = document.getElementById("option"+chose).style.backgroundColor;
    var answer = document.getElementById("color").innerHTML;
   
    if(answer === aux.replace(/\s+/g, '')){
        alert("Resposta Correta! Pressione F5 para um novo jogo");
    }else{
        alert("Incorreto. Tente novamente pressionando F5");
    }
}