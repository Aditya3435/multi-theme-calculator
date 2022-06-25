function toggleDefault() {
  document.body.classList.add("default-theme");
  document.body.classList.remove("blue-theme");
  document.body.classList.remove("white-theme");
}
function toggleWhite() {
  document.body.classList.add("white-theme");
  document.body.classList.remove("default-theme");
  document.body.classList.remove("blue-theme");
}
function toggleBlue() {
  document.body.classList.add("blue-theme");
  document.body.classList.remove("white-theme");
  document.body.classList.remove("default-theme");
}

document.querySelector('input').value = '0';
let str = "";
let buttons = document.querySelectorAll('.each-key');
buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});

function calculate(e) {
  const val = e.target.innerHTML;
  if (val == '=') {
    str = eval(str).toString();
    document.querySelector('input').value = str;
  }
  else if (val == "DEL") {
    str = str.slice(0, -1);
    if (str == '') str = '0';
    document.querySelector('input').value = str;
  }
  else if (val == "RESET") {
    str = '0';
    document.querySelector('input').value = str;
  }
  else {
    if (str == '0') str = val;
    else str += val;
    document.querySelector('input').value = str;
  }
}
