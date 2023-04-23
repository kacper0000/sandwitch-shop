let today = new Date();
console.log(today);
let dayOfWeek = today.getDay();
console.log(dayOfWeek);
let mainselection = document.getElementById("mainselection");
console.log(mainselection);
const close = document.createElement("h2");
console.log(close);
close.textContent = "We are close at weekends, Sorry for the inconvenience";

let dayName;
switch (dayOfWeek) {
	case 0:
		mainselection.appendChild(close);
		break;
	case 1:
		let undisable1 = document.querySelectorAll(".monday");
		undisable.disabled = false;
		break;
	case 2:
		let undisable2 = document.querySelectorAll(".tuesday");
		undisable.disabled = false;
		break;
	case 3:
		let undisable3 = document.querySelectorAll(".wendnesday");
		undisable.disabled = false;
		break;
	case 4:
		let undisable4 = document.querySelectorAll(".thursday");
		undisable.disabled = false;
		break;
	case 5:
		let undisable5 = document.querySelectorAll(".friday");
		undisable.disabled = false;
		break;
	case 6:
		mainselection.appendChild(close);
		break;
}
const select = document.getElementById("drink");
const tempInputs = document.querySelectorAll(".temp");
const largeCheckbox = document.getElementById("large");

select.addEventListener("change", function() {
  if (select.value === "4") {
    tempInputs.forEach(input => input.disabled = true);
    largeCheckbox.disabled = true;
  } else {
    tempInputs.forEach(input => input.disabled = false);
    largeCheckbox.disabled = false;
  }
});