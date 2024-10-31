const panels = document.querySelectorAll(".panel");
console.log(panels);

for (let panel of panels) {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
