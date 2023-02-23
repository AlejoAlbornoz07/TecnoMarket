
const apiRick=async (pagina)=>{//programamos una funcion asincrona, pagina es el valor
  let url="https://rickandmortyapi.com/api/character/?page="+pagina;
  const apu= await fetch(url);
  const data= await apu.json();
  console.log(data);
//primero vamos a recorrerlo
divRes=document.querySelector("#resultado");
divRes.innerHTML=""
data.results.map(item=>{
  divItem=document.createElement('div')
  divItem.innerHTML=`
      <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text"><b>Estatus: </b>${item.status}</p>
              <p class="card-text"><b>Especie: </b>${item.species}</p>
              <p class="card-text"><b>Genero: </b>${item.gender}</p>
        </div>
      </div>
  `
  divRes.appendChild(divItem);
});
}

apiRick(1)