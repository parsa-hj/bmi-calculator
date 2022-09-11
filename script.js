const btn = document.getElementById ('calculate');

btn.addEventListener("click", function() {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height  == '' || weight == ""){
        alert('Please fill out the form')
        return;
    } 

    //weight (lb) / [height (in)]2 x 703

    let BMI = 703 * (weight / (height * height * 144));

    BMI = BMI.toFixed(2);

    document.querySelector("#result").innerHTML = BMI;

    let status = "";
  
    if (BMI < 18.5) {
      status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
      status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
      status = "Overweight";
    }
    if (BMI >= 30) {
      status = "Obese";
    }
    document.querySelector(
      ".comment"
    ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;

});

