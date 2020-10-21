const scriptURL =
  "https://script.google.com/macros/s/AKfycbzM-tu4VAmYy1BXNskOwSvHse57Vr346JClxNnhSAEyxtkZ6ZU/exec";
const form = document.forms["submit-to-google-sheet"];

const submitHandler = e => {
  e.preventDefault();

  document.getElementById("signupbutton").disabled = true;
  document.getElementById("signupbutton").innerText = "...";

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => {
      document.getElementById("signupbutton").innerText = "Thank you!";
    })
    .catch(error => {
      document.getElementById("signupbutton").disabled = false;
      document.getElementById("signupbutton").innerText = "Sign up";
    });
};

form.addEventListener("submit", submitHandler);

document.getElementById("contributeyourdata").addEventListener("click", e => {
  document.getElementById("emailform").scrollIntoView();
  document.getElementById("email").focus();
});
