let data, info;

async function init(){   
  let link = "MCV.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let Collison = data[i];
    build += `<div class="fitted card">
                 <h3>${Collison.collision_id}</h3>
                 <hr>
                 <p>Killed: ${Collison.number_of_persons_killed}</p>
                 <p>injured: ${Collison.number_of_persons_injured}</p>
                 <p>${Collison.contributing_factor_vehicle_1}</p>
                 <hr>
                 <p>${Collison.vehicle_type_code1}</p>
                 <hr>
                 <p>${Collison.on_street_name}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByID(){
  let output = document.getElementById("output");
  let collision_id = document.getElementById("collision_id").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;


  for(let i = 0; i < data.length; i+=1){
    let Collison = data[i];
    if(Collison.collision_id == collision_id){
      build += `<div class="fitted card">
                  <h3>${Collison.collision_id}</h3>
                  <hr>
                  <p>Killed: ${Collison.number_of_persons_killed}</p>
                  <p>injured: ${Collison.number_of_persons_injured}</p>
                  <p>${Collison.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>${Collison.vehicle_type_code1}</p>
                  <hr>
                  <p>${Collison.on_street_name}</p>
                </div>`;
        ct += 1;

    }
  }
    
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;

}


function filterByStreet(){
  let on_street_name = document.getElementById("street").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let Collison= data[i];
    if(Collison.on_street_name == on_street_name){
        build += `<div class="fitted card">
                  <h3>${Collison.collision_id}</h3>
                  <hr>
                  <p>Killed: ${Collison.number_of_persons_killed}</p>
                  <p>injured: ${Collison.number_of_persons_injured}</p>
                  <p>${Collison.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>${Collison.vehicle_type_code1}</p>
                  <hr>
                  <p>${Collison.on_street_name}</p>
                </div>`;
        ct += 1;
  }

  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}

function filterByCar(){
  let model = document.getElementById("car").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let Collison= data[i];
    if(Collison.vehicle_type_code1 == model){
        build += `<div class="fitted card">
                  <h3>${Collison.collision_id}</h3>
                  <hr>
                  <p>Killed: ${Collison.number_of_persons_killed}</p>
                  <p>injured: ${Collison.number_of_persons_injured}</p>
                  <p>${Collison.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>${Collison.vehicle_type_code1}</p>
                  <hr>
                  <p>${Collison.on_street_name}</p>
                </div>`;
        ct += 1;
  }

  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}

function filterByCarandInjured(){
  let injured = parseInt(document.getElementById("injured").value);
  let model = document.getElementById("car").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let Collison= data[i];
    if(Collison.number_of_persons_injured == injured && Collison.vehicle_type_code1 == model){ 
        build += `<div class="fitted card">
                  <h3>${Collison.collision_id}</h3>
                  <hr>
                  <p>Killed: ${Collison.number_of_persons_killed}</p>
                  <p>injured: ${Collison.number_of_persons_injured}</p>
                  <p>${Collison.contributing_factor_vehicle_1}</p>
                  <hr>
                  <p>${Collison.vehicle_type_code1}</p>
                  <hr>
                  <p>${Collison.on_street_name}</p>
                </div>`;
        ct += 1;
    }

  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}