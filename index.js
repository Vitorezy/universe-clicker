var item1 = document.getElementById("item1")

var campo_pontuação = document.getElementById("campo_pontuação")
var campo_nivel = document.getElementById('campo_nivel')
var campo_multiplicador = document.getElementById('campo_multiplicador')
var obj_clicker = document.getElementById("obj_clicker")
var loja = document.getElementById('loja')
var loja_botao = document.getElementById('loja_botao')
var caixa_objetivo = document.getElementById("caixa_objetivo")
var span_item1 = document.getElementById("span_item1")
let objetivo = 20
let multiplicador = 0.5
let pontuação = 0
let nivel = 0
let preço_item_1 = 100
caixa_objetivo.innerText = "Objetivo: " + objetivo
campo_pontuação.innerText = pontuação.toFixed(1)
campo_nivel.innerText = "Nivel da estrela: " + nivel
campo_multiplicador.innerText = "Multiplicador = " + multiplicador + "x"
span_item1.innerText = "Multiplicador + 1 Preço: " + preço_item_1 + " Pontos."
document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
        obj_click()
    }
  });
function abrir_loja() { 
    loja.style.visibility = "visible"
    loja_botao.style.visibility = "hidden"
}
function fechar_loja() { 
    loja.style.visibility = "hidden"
    loja_botao.style.visibility = "visible"
}
function item_multiadd1(){ 
    campo_pontuação.innerText = pontuação.toFixed(1)
    caixa_objetivo.innerText = "Objetivo: " + objetivo
    campo_nivel.innerText = "Nivel da estrela: " + nivel
    campo_multiplicador.innerText = "Multiplicador = " + multiplicador.toFixed(1) + "x"
    if(pontuação > preço_item_1) { 
        pontuação = pontuação - preço_item_1
        campo_pontuação.innerText = pontuação.toFixed(1)
        multiplicador = multiplicador + 1
        preço_item_1 = 200
    }
    else { 

    }
}
function obj_click() { 
    pontuação = pontuação + multiplicador
    campo_pontuação.innerText = pontuação.toFixed(1)
    campo_multiplicador.innerText = "Multiplicador = " + multiplicador.toFixed(1) + "x"
    campo_nivel.innerText = "Nivel da estrela: " + nivel
    caixa_objetivo.innerText = "Objetivo: " + objetivo
    multiplicador = multiplicador + 0.005
    if(pontuação < 19){ 
        obj_clicker.style.filter = "brightness(105%) drop-shadow(2px 2px 2px #8a8700)";
        obj_clicker.style.scale = "101%"
        obj_clicker.style.backgroundImage = "url(imagens/estrela_principal.png)"
        nivel =  0
        multiplicador = multiplicador + 0.005
    }
    if(pontuação > 19 & pontuação < 40){ 
        obj_clicker.style.filter = "brightness(110%) drop-shadow(7px 7px 7px #8a8700)";
        obj_clicker.style.scale = "102%"
        nivel =  1
        objetivo = 40
        multiplicador = multiplicador + 0.0055
    }
    else if(pontuação > 40 & pontuação < 78){ 
        obj_clicker.style.filter = "brightness(115%) drop-shadow(9px 9px 9px #8a8700)";
        obj_clicker.style.scale = "103%"
        nivel =  2;
        objetivo = 80
        multiplicador = multiplicador + 0.0055
    }
    else if(pontuação > 78 & pontuação < 100){ 
        obj_clicker.style.filter = "brightness(120%) drop-shadow(12px 12px 12px #8a8700)";
        obj_clicker.style.scale = "104%"
        nivel =  3;
        objetivo = 100
        multiplicador = multiplicador + 0.006
    }
    else if(pontuação > 100 & pontuação<200){ 
        obj_clicker.style.scale = "101%"
        obj_clicker.style.backgroundImage = "url(imagens/lua_p100.png)"
        obj_clicker.style.filter = "brightness(110%) drop-shadow(5px 5px 5px #8a8700)";
        nivel =  4;
        objetivo = 200
        multiplicador = multiplicador + 0.006
    }
    else if(pontuação > 200 & pontuação < 300){ 
        obj_clicker.style.scale = "102%"
        obj_clicker.style.filter = "brightness(115%) drop-shadow(10px 10px 10px #8a8700)";
        nivel =  5;
        objetivo = 300
        multiplicador = multiplicador + 0.0065
    }
    else if(pontuação > 300 & pontuação < 350){ 
        obj_clicker.style.scale = "103%"
        obj_clicker.style.filter = "brightness(120%) drop-shadow(14px 14px 14px #8a8700)";
        nivel =  6;
        objetivo = 350
        multiplicador = multiplicador + 0.0065
    }
}