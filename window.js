dragElement(document.getElementById("noteWindow"));
dragElement(document.getElementById("socialWindow"));
dragElement(document.getElementById("deniedWindow"));
dragElement(document.getElementById("drawboxWindow"));
dragElement(document.getElementById("cliqueWindow"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var header = elmnt.querySelector('.title-bar');
  if (header) {
    header.onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.position = "absolute";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const windows = document.querySelectorAll('.window');
let z = 1;

windows.forEach((win) => {
  win.addEventListener('mousedown', () => {
    z = z + 1;
    win.style.zIndex = z;
  });
});