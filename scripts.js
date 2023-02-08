let popInternacional = document.getElementById("titulo-pop-internacional");
let divPopInt = document.getElementById("div-pop-int");
let softRock = document.getElementById("titulo-soft-rock");
let divSoftRock = document.getElementById("div-soft-rock");
let pes = document.getElementById("titulo-pes");
let divPes = document.getElementById("div-pes");
let backstreet = document.getElementById("titulo-backstreet");
let divBackstreet = document.getElementById("div-backstreet");

let setaPopInt = document.querySelector(".seta-pop-int");
let setaSoftRock = document.querySelector(".seta-soft-rock");
let setaPes = document.querySelector(".seta-pes");
let setaBackstreet = document.querySelector(".seta-backstreet");

//////gambs??

let valorPopInt = 915;
let valorSoftRock = 735;
let valorPes = 490;
let valorBackstreet = 740;

popInternacional.addEventListener('click', function() {

   if (divPopInt.style.height <= "0px") {
      divPopInt.style.height = valorPopInt + "px";

      setaPopInt.style.transform="rotate(180deg)";
   } else {
      
      divPopInt.style.cssText="height: 0px";

      setaPopInt.style.transform="rotate(0deg)";
   };

});


softRock.addEventListener('click', function() {

   if (divSoftRock.style.height <= "0px") {
      divSoftRock.style.height= valorSoftRock + "px";

      setaSoftRock.style.transform="rotate(180deg)";
   } else {
      
      divSoftRock.style.cssText="height: 0px";

      setaSoftRock.style.transform="rotate(0deg)";
   };

});


pes.addEventListener('click', function() {

   if (divPes.style.height <= "0px") {
      divPes.style.height = valorPes + "px";

      setaPes.style.transform="rotate(180deg)";
   } else {
      
      divPes.style.cssText="height: 0px";

      setaPes.style.transform="rotate(0deg)";
   };

});


backstreet.addEventListener('click', function() {

   if (divBackstreet.style.height <= "0px") {
      divBackstreet.style.height = valorBackstreet + "px";

      setaBackstreet.style.transform="rotate(180deg)";
   } else {
      
      divBackstreet.style.cssText="height: 0px";

      setaBackstreet.style.transform="rotate(0deg)";
   };

});

