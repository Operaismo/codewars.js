function bmi(weight, height) {
  let result = weight / (height ** 2);
  if (result <= 18.5){
    return "Underweight";
  }
}