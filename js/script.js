const btn = document.getElementById("btn");
const text = document.getElementById("text");
const emailInput = document.getElementById("emailInput");

btn.onclick = function () {
  const email = emailInput.value;

  if (email.includes("@gmail.com")) {
    text.style.display = "block";

    btn.style.display = "none";

    emailInput.style.display = "none";
  } else {
    alert("Email không hợp lệ");
  }
};

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.previousElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
      button.innerText = "VIEW MORE";
    } else {
      content.style.display = "block";
      button.innerText = "HIDE";
    }
  });
});
