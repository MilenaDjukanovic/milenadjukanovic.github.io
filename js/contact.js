function validateForm() {
    var x = document.forms["form"]["fullname"].value;
    var z = document.forms["form"]["email"].value;
    var y = document.forms["form"]["surname"].value;
    if (x == "") {
        if(y == "" || z == ""){
            alert("All fields must be filled out");
            return false;
        }
      alert("Name field must be filled out");
      return false;
    }
    if (y == "") {
        if(x == "" || z == ""){
            alert("All fields must be filled out");
            return false;
        }
      alert("Surname field must be filled out");
      return false;
    }
    if (z == "") {
        if(y == "" || x == ""){
            alert("All fields must be filled out");
            return false;
        }
      alert("Email field must be filled out");
      return false;
    }
    
  }
