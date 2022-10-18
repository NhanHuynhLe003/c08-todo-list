function checkDone() {
  let ulNode = document.getElementById("myUL");
  let liNodes = ulNode.children;

  for (let i = 0; i < liNodes.length; i++) {
    let liNode = liNodes[i];
    /**create close task icon */
    let closeTask = document.createElement("span");
    closeTask.className = "close";
    closeTask.innerText = "x";
    liNode.appendChild(closeTask);
    /**click to checked */
    closeTask.onclick = function () {
      let parentLiNode = liNode.parentElement;
      parentLiNode.removeChild(liNode);
    };
    liNode.onclick = function () {
      // if(this.className == 'checked') {
      //     this.className = '';
      // } else {
      //     this.className = 'checked';
      // }
      this.classList.toggle("checked");
    };
  }
}
function newElement() {
  let val = document.getElementById("myInput").value;
  if (val !== "") {
    let ulNode = document.getElementById("myUL");
    let liNode = document.createElement("li");
    ulNode.appendChild(liNode);
    liNode.innerHTML = val;

    let closeTask = document.createElement("span");
    closeTask.className = "close";
    closeTask.innerText = "x";
    liNode.appendChild(closeTask);
    closeTask.onclick = function () {
      let parentLiNode = liNode.parentElement;
      parentLiNode.removeChild(liNode);
    };

    liNode.onclick = function () {
      this.classList.toggle("checked");
    };
  }
}

checkDone();
