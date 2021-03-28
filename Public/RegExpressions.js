function tester() {
    var string1 = document.getElementById("input1").value;
    var string2 = new RegExp(document.getElementById("input2").value);
    var regex = string2.test(string1);
    document.getElementById("output").value = regex;
  }



    
