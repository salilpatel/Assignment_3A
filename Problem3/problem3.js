function generateCard(){
  let name = document.getElementById("name").value; 
  let collegeName = document.getElementById("collegeName").value;
  let location = document.getElementById("location").value;
  let img = document.getElementById("img");
  
  document.getElementById("textGeneratedIdCard").innerHTML = "Generated Id Card";
  document.getElementById("showName").innerHTML = `Name: ${name}`;
  document.getElementById("showCollegeName").innerHTML = `Colege Name: ${collegeName}`;
  document.getElementById("showLocation").innerHTML = `Location: ${location}`;

  document.getElementById("imgDiv").style.backgroundColor = "blue";
  document.getElementById("infoDiv").style.backgroundColor = "#d9d9d9";

  document.getElementById('myImg').style.backgroundImage = img;
}