let name = document.querySelector("#exampleInputName");
let gender = document.querySelectorAll(
  "#form-user-create [name=gender]:checked"
);

let birth = document.querySelector("#exampleInputBirth");
let country = document.querySelector("#exampleInputCountry");
let email = document.querySelector("#exampleInputEmail");
let password = document.querySelector("#exampleInputPassword");
let photo = document.querySelector("#exampleInputFile");
// let admin = document.querySelector("#");

let fields = document.querySelectorAll("#form-user-create [name]");

fields.forEach((field) => {
  if (field.name == "gender") {
    if (field.checked) console.log("Sim", field);
  } else {
    console.log("Não");
  }

  // console.log(field.id);
});
