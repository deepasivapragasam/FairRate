let next = document.getElementsByClassName("next");
let back = document.getElementsByClassName("back");
let dropBox = document.getElementsByClassName("drop-box")[0];
let sections= document.getElementsByTagName("section");

for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", function () {
    sections[i].style.display = "none";
    sections[i+1].style.display = "block";
  });
}
for (let j = 0; j < back.length; j++) {
  back[j].addEventListener("click", function () {
  sections[j+1].style.display = "none";
  sections[j].style.display = "block";
  console.log(j);
});
}
dropBox.addEventListener("click", function () {
  console.log(this.target);
  if (document.getElementsByClassName("drop-options")[0].style.display == "none") {
    document.getElementsByClassName("drop-options")[0].style.display = "block";
  }
  else {
    document.getElementsByClassName("drop-options")[0].style.display = "none";
  }
});

let list = document.getElementsByClassName("list");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    document.getElementsByClassName("drop-box")[0].innerHTML = this.innerHTML;
  });
}

//range slider
let slider = document.getElementsByClassName("slider");
let selector = document.getElementsByClassName("selector");
let progress = document.getElementsByClassName("progressBar");
let output = document.getElementsByClassName("output");
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("input", function () {
    selector[i].style.left = this.value + "%";
    progress[i].style.width = this.value + "%";
    output[i].value = "$" + this.value;
    console.log(selector[i]);
  });
}

//chekboxes
let checkbox = document.querySelectorAll('.check');
let checkBorder = document.querySelectorAll('.addBorder');
for (let i = 0; i < checkbox.length; i++) {
  console.log(checkbox[i]);
  checkbox[i].addEventListener("click", function () {
    if (checkbox[i].checked) {
      checkBorder[i].classList.add("blue-border");
    }
    else {
      checkBorder[i].classList.remove("blue-border");
    }
  });

}

