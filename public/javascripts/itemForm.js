

const element =(
  <div> 
      <p><strong>Input your Word Choices:</strong></p>
   
    <form method="post" id="form">
        <label>    School Name:  </label><br />
        <input type="text" id="schoolName"  value="Bridgewater State University" size='30'></input><br /> <br />
        <label> Female student name: </label><br />
        <input type="text" id="firstFemale"  value=" Maria"></input> <br /><br />
        <label> Another female student name: </label><br />
        <input type="text" id="secondFemale" value=" Octavia" ></input><br /> <br/>
        <label> Male student name: </label> <br />
        <input type="text" id="firstMale" value="Himanshu" ></input><br /> <br/>
        <label> Another male student name: </label> <br />
        <input type = "text" id="secondMale" value=" Barry"></input><br /> <br />
        <label> Plural Noun: </label><br />
        <input type="text" id="plural"  value=" students"></input> <br /> <br />

        <input type="submit" value="Here is the relsult"></input>
    </form>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('container')
);

let xhttp = new XMLHttpRequest(); 

function sendStuff(event) {
  xhttp.addEventListener("load",success); 
  xhttp.addEventListener("error",error);  
  xhttp.open("POST", "/itemForm", true);
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  
  let formData = {} // initialize object formData
  // for loop: go through all form inputs (title and paragraph) and build object formData
  // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
  // https://www.w3schools.com/jsref/met_element_getattribute.asp
  document.querySelectorAll("input[type='text']").forEach(function(element){
    formData[element.getAttribute("id")] = element.value;
  });
  xhttp.send(JSON.stringify(formData));

  /* // Alternative 
  let formData = {
    "first": document.getElementById("first").value,
    "last": document.getElementById("last").value
  };*/
  
  // reference: https://www.w3schools.com/jsref/event_preventdefault.asp
  event.preventDefault(); // prevent form default event which refreshes the page
}
  
function success(){
  let data = JSON.parse(xhttp.response);
  let echo = (
    <div>
      <p><strong>{data.schoolName}</strong> is one of the Best University in Massashusetts ask <strong>{data.firstMale}.<br /> </strong>
      Because he was in the web development class with<strong>{data.firstFemale}. </strong>Their professor name is Dr.Jung<br />
      Dr. Jung always motivated her students to keep learning even when they don't do good on the exam. <br /> She give them hope to keep going 
      and tell her students if they keep trying one day they will become great programers.<br /> <strong>{data.secondMale}</strong> was in that class too.
      Because Dr. Jung is such a great proffessor <strong> {data.secondFemale} </strong> is planning to take her class next semester. <br />  
    <strong>{data.plural}</strong> want to be successfull in the future.

      </p>
     

    </div>
  );
  
  ReactDOM.render(
    echo,
    document.getElementById('echo')
  );
}
function error(){
  console.log(xhttp.readyState);
  console.log(xhttp.status);
  
}

document.getElementById("form").addEventListener("submit", sendStuff);