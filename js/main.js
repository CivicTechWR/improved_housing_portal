const scriptURL =
  "https://script.google.com/macros/s/AKfycbzM-tu4VAmYy1BXNskOwSvHse57Vr346JClxNnhSAEyxtkZ6ZU/exec";
const form = document.forms["submit-to-google-sheet"];

const submitHandler = e => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
};

form.addEventListener("submit", submitHandler);

document.getElementById("contributeyourdata").addEventListener("click", e => {
  document.getElementById("emailform").scrollIntoView();
  document.getElementById("emailinput").focus();
});
