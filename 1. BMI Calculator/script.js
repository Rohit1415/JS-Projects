function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    if (height === "" || weight === "") {
      alert("Please enter both height and weight.");
      return;
    }
  
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(2);
  
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI: " + bmi;
  
    clearInputFields();
  }
  
  function clearInputFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  }
  