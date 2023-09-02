let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back to website :( ";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});
