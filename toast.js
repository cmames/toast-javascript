// toast.js by C. Mames is licensed under the GNU General Public License v3.0 
// https://github.com/cmames/toast-javascript 

function toast(texte) {
  let elem = document.createElement("div");
  elem.className = "toast";
  elem.innerHTML = texte;
  document.body.appendChild(elem);
  setTimeout(function () { elem.remove() }, 3500);
}
