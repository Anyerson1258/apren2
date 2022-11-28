
const restaurantes = [ 

    {
        imagen: ` <img src="https://media-cdn.tripadvisor.com/media/photo-s/14/0d/01/0e/paella-bupos-con-adicion.jpg"/>`,
        nombre: "Pacifico mar",
        direccion: "Av 85 Nro. 45-85 Barranquilla",
        describcion: "Deliciosa comida de mar"
    }
    ,
    {
        imagen: (`<img src="https://tipsparatuviaje.com/wp-content/uploads/2020/03/lasana-comida.jpg"/>`),
        nombre: "Italian 65",
        direccion: "Av 45 Nro. 1-85 Medellin",
        describcion: "Deliciosa comida Italiana"
    },
    {
        imagen: (`<img src="https://animalgourmet.com/wp-content/uploads/2015/05/1517294939_30d8df3f32_b.jpg"/>`),
        nombre: "Fritos y mas",
        direccion: "calle 45 Medellin",
        describcion: "Comida Rapida",

    },
    {
        imagen: (`<img src="https://img-global.cpcdn.com/recipes/4d1aaf40db1eaad0/680x482cq70/pollo-frito-foto-principal.jpg"/>`),
        nombre: "Pollo frito",
        direccion: "Cr 32 #56 - 89 ",
        describcion: "lo mejor del pollo "
    }
];

let restauran =  (rest)=>{
    return ` 
            <div class="card">
            ${rest.imagen}
         <h4> ${rest.nombre}</h4>
         <p> ${rest.direccion}</p>
         <p> ${rest.describcion}</p>
         
          </div>
    `;
}



function mifunction() {
    let busca = document.getElementById("buscar").value;
    let volean = false;
  
   for (let i = 0; i < restaurantes.length; i++) {
    a = restaurantes[i].nombre;
    

    if (busca===a) {
         volean=true
       document.getElementById("container").innerHTML =restauran(restaurantes[i]);  
    }
   }
    if (volean==false) {
        document.getElementById("container").innerHTML =" No se encontraron resultados..."; 
    }
 }






    




