var img;

function loadImage(e){
  img = URL.createObjectURL(e.target.files[0]);
  
  document.getElementById("showInputImg").src = img;
  document.getElementById("showInputImg").style.visibility = "visible";
}


function generateCard(){
  let name = document.getElementById("name").value; 
  let collegeName = document.getElementById("collegeName").value;
  let location = document.getElementById("location").value;
  
  document.getElementById("textGeneratedIdCard").innerHTML = "Generated Id Card";
  document.getElementById("showName").innerHTML = `Name: <strong>${name}</strong>`;
  document.getElementById("showCollegeName").innerHTML = `Colege Name: <strong>${collegeName}</strong>`;
  document.getElementById("showLocation").innerHTML = `Location: <strong>${location}</strong>`;
  
  document.getElementById("myImg").src = img;
  
  document.getElementById("generatedIdCard_Inner").style.visibility = "visible";
}

