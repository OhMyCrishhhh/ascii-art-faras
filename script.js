document.getElementById("btn").onclick = function () {
  document.getElementById("ascii").style.display = "block";
};
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading").style.display = "none";
  }, 2000);
};