function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function validateDate(){
    var currdate = new Date();
    var mydate=document.forms["myForm"]["bdate"].value;
    if(currdate-mydate<18){
        alert("Age should be greater than 18");
        return false;
    }else
        return("date of birth cannot be empty ");
}

var cancel=document.getElementById("cancel");
cancel.onclick=function(){
    document.getElementById("fname").value="";
    document.getElementById("mname").value="";
    document.getElementById("lname").value="";
    document.getElementById("bname").value="";
    document.getElementById("male").value="";
    document.getElementById("female").value="";
}