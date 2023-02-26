let input = document.querySelector("form input");
let show = document.querySelector(".show");
let indicator = document.querySelector(".indicator");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let third = document.querySelector(".third");
let text = document.querySelector(".text");
let regex1 = /\w+/gi;
let regex2 = /\w+\d+/gi;
let regex3 = /\w+\d+\D+\W+/gi;
function active() {
  if (input.value != "") {
    if (regex1.test(input.value) == true) {
      first.classList.add("le1");
      text.innerHTML = "Your password is too week";
      text.style.color = "red";
    } else {
      first.classList.remove("le1");
    }
    if (regex2.test(input.value) == true) {
      first.classList.add("le1");
      second.classList.add("le2");
      text.innerHTML = "Your password is medium";
      text.style.color = "#ff9800";
    } else {
      second.classList.remove("le2");
    }
    if (regex3.test(input.value) == true) {
      first.classList.add("le1");
      second.classList.add("le2");
      third.classList.add("le3");
      text.innerHTML = "Your password is strong";
      text.style.color = "#4caf50";
    } else {
      third.classList.remove("le3");
    }

    show.addEventListener("click", (e) => {
      if (input.type == "password") {
        input.type = "text";
        e.currentTarget.innerHTML = "HIDE";
        show.classList.add("active");
      } else {
        input.type = "password";
        e.currentTarget.innerHTML = "SHOW";
        show.classList.remove("active");
      }
    });
    indicator.style.display = "flex";
  } else {
    indicator.style.display = "none";
  }
}
