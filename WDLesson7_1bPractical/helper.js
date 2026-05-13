//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card( violation ){
    let build = "";
      build += `<div class="fitted card">
                    <h3>${violation.violation}</h3>
                    <hr>
                    <p>${violation.issuing_agency}</p>
                    <p>${violation.issue_date}</p>
                    <p>${violation.summons_number}</p>
                    <hr>
                    <p>${violation.plate}</p>
                    <hr>
                    <p>${violation.state}</p>
                </div>`;
                
      return build;
    
    }


