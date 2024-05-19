var item1 = document.getElementById("item1")
var campo_pontuação = document.getElementById("campo_pontuação")
var campo_nivel = document.getElementById('campo_nivel')
var campo_multiplicador = document.getElementById('campo_multiplicador')
var obj_clicker = document.getElementById("obj_clicker")
var loja = document.getElementById('loja')
var loja_botao = document.getElementById('loja_botao')
var caixa_objetivo = document.getElementById("caixa_objetivo")
var span_item1 = document.getElementById("span_item1")
var span_item2 = document.getElementById("span_item2")
var span_item3 = document.getElementById("span_item3")
var span_item4 = document.getElementById("span_item4")
var span_item5 = document.getElementById("span_item5")
var span_item6 = document.getElementById("span_item6")
var span_item7 = document.getElementById("span_item7")
var span_item8 = document.getElementById("span_item8")
var span_item9 = document.getElementById("span_item9")
var span_item10 = document.getElementById("span_item10")
var caixa_aviso = document.getElementById("aviso")
var aviso_texto = document.getElementById("aviso_texto")
var regras_texto = document.getElementsByName("enunciado_texto_aviso")
var selecionador_item = document.getElementById("escolher_tipo_item")
var terra_cosmético = document.getElementById("terra_cosmético")
let comprado1_cosmetico = 0
let comprado1_melhoria = 0
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
  function começar() { 
    aviso.style.visibility = "hidden"
    campo_pontuação.style.visibility = "visible"
    campo_multiplicador.style.visibility = "visible"
    campo_nivel.style.visibility = "visible"
    caixa_objetivo.style.visibility = "visible"
    obj_clicker.style.visibility = "visible"
    loja_botao.style.visibility = "visible"
    aviso_texto.style.visibility = "hidden"
    loja_botao.style.visibility = "visible"
  }
function abrir_loja() { 
    loja.style.visibility = "visible"
    loja_botao.style.visibility = "hidden"
}
function fechar_loja() { 
    loja.style.visibility = "hidden"
    loja_botao.style.visibility = "visible"
}
function selecionador() { 
    if(selecionador_item.value == "Cosméticos") { 
        span_item1.innerText = "Terra e lua 🥰😁" + "preço: 500"
    }
    else if(selecionador_item.value == "Melhorias") { 
         if(comprado1_melhoria == 1) { 
            span_item1.innerText = "Multiplicador + 1 Adquirido 😁"
    }
        else if (comprado1_melhoria == 0) {
        span_item1.innerText = "Multiplicador + 1 Preço: " + preço_item_1 + " Pontos." 
    }
    }
}
function item_1(){ 
        if(selecionador_item.value == "Cosméticos") { 
            preço_item_1 = 500
            if(pontuação >= preço_item_1){ 
                if (comprado1_cosmetico == 0) {
                    alert("Você adquirou terra e Lua 🌙🌎✨")
                    terra_cosmético.style.visibility = "visible"
                    comprado1_cosmetico = 1
                    pontuação = pontuação - preço_item_1
                    caixa_objetivo.innerText = "Objetivo: " + objetivo
                    campo_pontuação.innerText = pontuação.toFixed(1)
                    campo_nivel.innerText = "Nivel da estrela: " + nivel
                    campo_multiplicador.innerText = "Multiplicador = " + multiplicador + "x"
                    
                }
                else if(comprado1_cosmetico == 1) {
                    preço_item_1 = 0
                    alert("Você já obteve esse item 💪✨")  
        } 
        }
        else { 
            if (comprado1_cosmetico == 0) {
                alert("Você não tem pontos suficientes 😒✨")
                
            }
            else if(comprado1_cosmetico == 1) {
                alert("Você já obteve esse item 💪✨")
        }  
                } 
            
        }
        else if(selecionador_item.value == "Melhorias") {
            preço_item_1 = 100 
            if(comprado1_melhoria == 0) {
                preço_item_1 = 100 
            if(pontuação >= preço_item_1) { 
                    pontuação = pontuação - preço_item_1
                    span_item1.innerText = "Multiplicador + 1 Adquirido 😁" 
                    multiplicador = multiplicador + 1
                    comprado1_melhoria = 1
                    caixa_objetivo.innerText = "Objetivo: " + objetivo
                    campo_pontuação.innerText = pontuação.toFixed(1)
                    campo_nivel.innerText = "Nivel da estrela: " + nivel
                    campo_multiplicador.innerText = "Multiplicador = " + multiplicador.toFixed(1) + "x"
            }
            else if (pontuação < preço_item_1) { 
                 pontuação = pontuação
                 alert("Você não tem pontos suficientes 😒✨") 
                 multiplicador = multiplicador
                 caixa_objetivo.innerText = "Objetivo: " + objetivo
                 campo_pontuação.innerText = pontuação.toFixed(1)
                 campo_nivel.innerText = "Nivel da estrela: " + nivel
                 campo_multiplicador.innerText = "Multiplicador = " + multiplicador + "x"
            }
            }
            else if(comprado1_melhoria == 1) { 
                    pontuação = pontuação
                    span_item1.innerText = "Multiplicador + 1 Adquirido 😁" 
                    multiplicador = multiplicador
                    comprado1_melhoria = 1
                    alert("Você já obteve esse item 💪✨") 
            }
                }
                
            }
            
function obj_click() { 
    pontuação = pontuação + multiplicador
    campo_pontuação.innerText = pontuação.toFixed(1)
    campo_multiplicador.innerText = "Multiplicador = " + multiplicador.toFixed(1) + "x"
    campo_nivel.innerText = "Nivel da estrela: " + nivel
    caixa_objetivo.innerText = "Objetivo: " + objetivo
    multiplicador = multiplicador + 0.005
    if(pontuação < 19) { 
        objetivo = 20
        obj_clicker.style.filter = "brightness(105%) drop-shadow(2px 2px 2px #8a8700)";
        obj_clicker.style.scale = "101%"
        obj_clicker.style.backgroundImage = "url(imagens/estrela_principal.png)"
        nivel = 0
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