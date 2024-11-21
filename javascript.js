// recuperer la class des 4 images
const bouton = document.querySelector(".bouton");
const bouton1 = document.querySelector(".bouton2");
const bouton2 = document.querySelector(".bouton3");
const bouton3 = document.querySelector(".bouton4");


const circle= document.querySelector(".circle");
const line= document.querySelector(".line");

// Liste des elements et la position du cercle en hover des elements
const allElements=[
  {element:bouton, nombre:11},
  {element:bouton1, nombre:36},
  {element:bouton2, nombre:61},
  {element:bouton3, nombre:86}
]

// effet hover sur les images
const bouger=(element,marge)=>{
    element.addEventListener("mouseenter", () => {
      circle.style.marginLeft=marge+`%`; 
    })
}

// reinitialiser la position du cercle
const reset=(element)=>{ 
     element.addEventListener("mouseleave", () => {
      circle.style.marginLeft=`0%`;
    })
}

// Faire deplacer le circle 
const deplacecircle=(marge)=>{
    circle.style.marginLeft=`${marge}%`;
}

for (let item of allElements) {
    bouger(item.element,item.nombre)
    reset(item.element)
}


//Faire deplacer le cercle en fonction de la position du clique sur la ligne 
line.addEventListener("click", (event) => {
  const rect = line.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const width = rect.width;
  const percentage = (x / width) * 100;

  if (percentage <= 25) { deplacecircle(allElements[0].nombre) }
  else if(percentage <= 50){ deplacecircle(allElements[1].nombre) }
  else if(percentage <= 75){ deplacecircle(allElements[2].nombre) }
  else{ deplacecircle(allElements[3].nombre) }
});









