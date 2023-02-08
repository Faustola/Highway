let ulPopInternacional = document.querySelector(".ul-pop-int");
let ulSoftRock = document.querySelector(".ul-soft-rock");
let ulPes = document.querySelector(".ul-pes");
let ulBackstreetBoys = document.querySelector(".ul-backstreet-boys");

let liDarkside = document.querySelector(".li-darkside");
let liIgnite = document.querySelector(".li-ignite");
let liJustTheWay = document.querySelector(".li-just-the-way");
let liVivaLaVida = document.querySelector(".li-viva-la-vida");
let liDontStartNow = document.querySelector(".li-dont-start-now");
let liShapeOfYou = document.querySelector(".li-shape-of-you");
let liIDontCare = document.querySelector(".li-i-dont-care");
let liEnemy = document.querySelector(".li-enemy");
let liRadioactive = document.querySelector(".li-radioactive");
let liLoveMeAgain = document.querySelector(".li-love-me-again");
let liCountingStars = document.querySelector(".li-counting-stars");
let liLockedAway = document.querySelector(".li-locked-away");
let liMeAndMy = document.querySelector(".li-me-and-my");
let liIKnewYou = document.querySelector(".li-i-knew-you");
let liDanceMonkey = document.querySelector(".li-dance-monkey");

let liDreamOn = document.querySelector(".li-dream-on");
let liAlways = document.querySelector(".li-always");
let liCrying = document.querySelector(".li-crying");
let liHotelCalifornia = document.querySelector(".li-hotel-california");
let liMoreThanWords = document.querySelector(".li-more-than-words");
let liSweetChild = document.querySelector(".li-sweet-child");
let liRockNRoll = document.querySelector(".li-rock-n-roll");
let liLivinOnA = document.querySelector(".li-livin-on-a");
let liNovemberRain = document.querySelector(".li-november-rain");
let liHaveYouEver = document.querySelector(".li-have-you-ever");
let liWindOfChange = document.querySelector(".li-wind-of-change");
let liEveryBreath = document.querySelector(".li-every-breath");

let liWakeMeup = document.querySelector(".li-wake-me-up");
let liPompeii = document.querySelector(".li-pompeii");
let liINeedYourLove = document.querySelector(".li-i-need-your-love");
let liRatherBe = document.querySelector(".li-rather-be");
let liSymphony = document.querySelector(".li-symphony");
let liMiracleMile = document.querySelector(".li-miracle-mile");
let liRockYou = document.querySelector(".li-rock-you");
let liSomethingJust = document.querySelector(".li-something-just");

let liAllIHave = document.querySelector(".li-all-i-have");
let liAsLongAs = document.querySelector(".li-as-long-as");
let liIWantIt = document.querySelector(".li-i-want-it");
let liIncomplete = document.querySelector(".li-incomplete");
let liStraightThrough = document.querySelector(".li-straight-through");
let liBigger = document.querySelector(".li-bigger");
let liDrowning = document.querySelector(".li-drowning");
let liGetDown = document.querySelector(".li-get-down");
let liJustWantYou = document.querySelector(".li-just-want-you");
let liQuitPlaying = document.querySelector(".li-quit-playing");
let liShapeOfMyHeart = document.querySelector(".li-shape-of-my-heart");
let liTheOne = document.querySelector(".li-the-one");


let btncria = document.querySelector("#btn-cria")
let nomePlaylist = document.querySelector(".nome-da-playlist");
let inputPlaylist = document.querySelector(".input-playlist");
let aquiPlaylists = document.querySelector(".aqui-playlists");
let cliqueDuasVezes = document.querySelector(".clique-duas-vezes");

let nomeNovaPlaylist;
let textoNovaPlaylist;
let novoTitulo; 
let novaUl;
let addMusicas;
let textoAddMusicas;
let adicionar = false;

let heightPopInt = 970;

function criaPlaylist() {
    nomePlaylist.style.display="block";
}

function daNomePlaylist() {

    nomePlaylist.style.display="none";

    nomeNovaPlaylist = inputPlaylist.value;
    textoNovaPlaylist = document.createTextNode(nomeNovaPlaylist);
    novoTitulo = document.createElement("h3")
    novoTitulo.appendChild(textoNovaPlaylist)

    if(nomeNovaPlaylist != "") {
        novaUl = document.createElement("ul");
        novaUl.appendChild(novoTitulo);
        aquiPlaylists.appendChild(novaUl);
        btncria.style.display="none";

        addMusicas = document.createElement("button");
        textoAddMusicas = document.createTextNode("Add");
        addMusicas.appendChild(textoAddMusicas);
        novaUl.appendChild(addMusicas);

        salvaAddMusicas = document.createElement("button");
        textoSalvaAddMusicas = document.createTextNode("Salvar");
        salvaAddMusicas.appendChild(textoSalvaAddMusicas);
        novaUl.appendChild(salvaAddMusicas);
        salvaAddMusicas.style.cssText="display: none; width: 50px; height: 30px; margin-top: -5px; color:white; background-color: rgb(0, 114, 9)"

        addMusicas.addEventListener('click', function() {
            adicionar = true;
            cliqueDuasVezes.style.display="block";
            salvaAddMusicas.style.display="block";
            addMusicas.style.display="none";
        });
        salvaAddMusicas.addEventListener("click", function() {
            adicionar = false;
            cliqueDuasVezes.style.display="none";
            salvaAddMusicas.style.display="none";
            addMusicas.style.display="block";
        })
    }
};

//////////funções das playlists

function playlistDarkside() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liDarkside);
        novaUl.appendChild(liDarkside);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistIgnite() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liIgnite);
        novaUl.appendChild(liIgnite);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistJustTheWay() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liJustTheWay);
        novaUl.appendChild(liJustTheWay);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistVivaLaVida() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liVivaLaVida);
        novaUl.appendChild(liVivaLaVida);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistDontStartNow() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liDontStartNow);
        novaUl.appendChild(liDontStartNow);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistShapeOfYou() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liShapeOfYou);
        novaUl.appendChild(liShapeOfYou);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistIDontCare() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liIDontCare);
        novaUl.appendChild(liIDontCare);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistEnemy() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liEnemy);
        novaUl.appendChild(liEnemy);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistRadioactive() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liRadioactive);
        novaUl.appendChild(liRadioactive);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistLoveMeAgain() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liLoveMeAgain);
        novaUl.appendChild(liLoveMeAgain);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistCountingStars() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liCountingStars);
        novaUl.appendChild(liCountingStars);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistLockedAway() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liLockedAway);
        novaUl.appendChild(liLockedAway);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistMeAndMy() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liMeAndMy);
        novaUl.appendChild(liMeAndMy);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistIKnewYou() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liIKnewYou);
        novaUl.appendChild(liIKnewYou);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistDanceMonkey() {
    if(adicionar == true) {
        ulPopInternacional.removeChild(liDanceMonkey);
        novaUl.appendChild(liDanceMonkey);

        valorPopInt -= 60;
        divPopInt.style.height= valorPopInt +"px";
    }
}

function playlistDreamOn() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liDreamOn);
        novaUl.appendChild(liDreamOn);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistAlways() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liAlways);
        novaUl.appendChild(liAlways);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistCrying() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liCrying);
        novaUl.appendChild(liCrying);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistHotelCalifornia() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liHotelCalifornia);
        novaUl.appendChild(liHotelCalifornia);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistMoreThanWords() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liMoreThanWords);
        novaUl.appendChild(liMoreThanWords);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistSweetChild() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liSweetChild);
        novaUl.appendChild(liSweetChild);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistRockNRoll() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liRockNRoll);
        novaUl.appendChild(liRockNRoll);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistLivinOnA() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liLivinOnA);
        novaUl.appendChild(liLivinOnA);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistNovemberRain() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liNovemberRain);
        novaUl.appendChild(liNovemberRain);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistHaveYouEver() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liHaveYouEver);
        novaUl.appendChild(liHaveYouEver);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistWindOfChange() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liWindOfChange);
        novaUl.appendChild(liWindOfChange);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistEveryBreath() {
    if(adicionar == true) {
        ulSoftRock.removeChild(liEveryBreath);
        novaUl.appendChild(liEveryBreath);

        valorSoftRock -= 60;
        divSoftRock.style.height= valorSoftRock +"px";
    }
}

function playlistWakeMeUp() {
    if(adicionar == true) {
        ulPes.removeChild(liWakeMeup);
        novaUl.appendChild(liWakeMeup);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistPompeii() {
    if(adicionar == true) {
        ulPes.removeChild(liPompeii);
        novaUl.appendChild(liPompeii);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistINeedYourLove() {
    if(adicionar == true) {
        ulPes.removeChild(liINeedYourLove);
        novaUl.appendChild(liINeedYourLove);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistRatherBe() {
    if(adicionar == true) {
        ulPes.removeChild(liRatherBe);
        novaUl.appendChild(liRatherBe);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistSymphony() {
    if(adicionar == true) {
        ulPes.removeChild(liSymphony);
        novaUl.appendChild(liSymphony);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistMiracleMile() {
    if(adicionar == true) {
        ulPes.removeChild(liMiracleMile);
        novaUl.appendChild(liMiracleMile);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistRockYou() {
    if(adicionar == true) {
        ulPes.removeChild(liRockYou);
        novaUl.appendChild(liRockYou);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistSomethingJust() {
    if(adicionar == true) {
        ulPes.removeChild(liSomethingJust);
        novaUl.appendChild(liSomethingJust);

        valorPes -= 60;
        divPes.style.height= valorPes +"px";
    }
}

function playlistAllIHave() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liAllIHave);
        novaUl.appendChild(liAllIHave);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistAsLongAs() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liAsLongAs);
        novaUl.appendChild(liAsLongAs);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistIWantIt() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liIWantIt);
        novaUl.appendChild(liIWantIt);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistIncomplete() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liIncomplete);
        novaUl.appendChild(liIncomplete);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistStraightThrough() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liStraightThrough);
        novaUl.appendChild(liStraightThrough);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistBigger() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liBigger);
        novaUl.appendChild(liBigger);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistDrowning() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liDrowning);
        novaUl.appendChild(liDrowning);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistGetDown() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liGetDown);
        novaUl.appendChild(liGetDown);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistJustWantYou() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liJustWantYou);
        novaUl.appendChild(liJustWantYou);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistQuitPlaying() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liQuitPlaying);
        novaUl.appendChild(liQuitPlaying);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistShapeOfMyHeart() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liShapeOfMyHeart);
        novaUl.appendChild(liShapeOfMyHeart);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}

function playlistTheOne() {
    if(adicionar == true) {
        ulBackstreetBoys.removeChild(liTheOne);
        novaUl.appendChild(liTheOne);

        valorBackstreet -= 60;
        divBackstreet.style.height= valorBackstreet +"px";
    }
}