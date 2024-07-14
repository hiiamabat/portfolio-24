// Copy Email
const emailText = document.querySelector("#email-text");
const copyEmailButton = document.querySelector(".copy-email");

copyEmailButton.addEventListener("click", () => {
  const text = emailText.textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Email copied to clipboard');
  }).catch(err => {
    console.error('Could not copy text: ', err);
  });
});
