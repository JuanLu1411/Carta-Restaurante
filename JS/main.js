const Plato = document.getElementsByClassName("menu-simple")
const Boton = document.getElementsByClassName("boton")
const Titulo = document.getElementsByTagName("h4")
const Info = document.getElementsByTagName("p")
const Cabecera = document.getElementsByTagName("h1")
const Imagen = document.getElementsByTagName("img")

function vegano() {
    Cabecera[0].innerHTML = "NUESTROS PLATOS VEGANOS";
    Titulo[1].innerHTML = "Espaguetis a la Romana";
    Info[0].innerHTML = "Estos espaguetis llevan un variado de especias italianas,queso parmesano rallado y aceite con un cierto toque picante";
    Titulo[2].innerHTML = "Lasaña de la Huerta";
    Info[1].innerHTML = "Con su salsa boloñesa(en la que sustituimos la carne por verengena, la cual queda tierna en el interior de la Lasaña) hecha a fuego lento y su bechamel casera es imposible resistirse";
    Titulo[3].innerHTML = "Pizza de Tofu";
    Info[2].innerHTML = "Pizza con losde queso mozzarella y lonchas de Tofu marinado";
    Imagen[2].src = "./img/pizza-pepperoni.jpg"
    Titulo[4].innerHTML = "Pizza 4 Quesos";
    Info[3].innerHTML = "Pizza con queso mozzarella, queso gorgonzola, queso parmesano rallado y queso ricotta";
    Titulo[5].innerHTML = "Pizza Champolla";
    Info[4].innerHTML = "Grana Padano en polvo, mozzarella Fior di Latte, Champillones, cebolla caramelizada, yema de huevo y pimienta negra";
    Titulo[6].innerHTML = "Pizza con jamon cocido vegano";
    Info[5].innerHTML = "pizza con jamón cocido vegano. Salsa de tomate, queso mozzarella. Deliciosa.";
}


function reset() {
    location.reload()
}

function celiaco() {
    Cabecera[0].innerHTML = "NUESTROS PLATOS PARA CELIACOS";
    Titulo[1].innerHTML = "Espaguetis PORTOFINO - Version Celiaca";
    Info[0].innerHTML = "Todo el sabor de los espaguetis PORTOFINO pero !Ahora tambien en version celiaca!"
    Titulo[2].innerHTML = "Lasaña PORTOFINO - Version Celiaca";
    Info[1].innerHTML = "Todo el sabor de la Lasaña PORTOFINO pero !Ahora tambien en version celiaca!"
    Titulo[3].innerHTML = "Pizza Pepperoni - Version Celiaca";
    Info[2].innerHTML = "Todo el sabor de la Pizza Pepperoni pero !Ahora tambien en version celiaca!"
    Titulo[4].innerHTML = "Pizza 4 Quesos - Version Celiaca";
    Info[3].innerHTML = "Todo el sabor de la Pizza 4 Quesos pero !Ahora tambien en version celiaca!"
    Titulo[5].innerHTML = "Pizza Carbonara - Version Celiaca";
    Info[4].innerHTML = "Todo el sabor de la Pizza 4 Quesos pero !Ahora tambien en version celiaca!"
    Titulo[6].innerHTML = "Pizza Prosciutto - Version Celiaca";
    Info[5].innerHTML = "Todo el sabor de la Pizza 4 Quesos pero !Ahora tambien en version celiaca!"
    Imagen[2].src = "./img/pizza_sin_gluten.jpg"
}