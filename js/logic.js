var htmlString = "";
var htmlWrapper = document.querySelector('body');
var inputSearchBox = document.querySelector('#searchBox');
var controlButtonsVar;
var hasSearched = false;

var todoListArray = [{
    tName: 'Cook some food',
    dateOfCom: '03/05/18',
    tPriority: 1
  }, {
    tName: 'Take out the trash',
    dateOfCom: '03/05/18',
    tPriority: 2
  },
  {
    tName: 'Go out for a jog',
    dateOfCom: '03/05/18',
    tPriority: 1
  },
  {
    tName: 'Clean the house',
    dateOfCom: '03/05/18',
    tPriority: 2
  }
];

// run this code only when script first loads.
window.onload = function() {
  webPrint();
};


function addTableButtons() {
  controlButtonsVar = document.querySelectorAll('.controlButtons');
  var length = controlButtonsVar.length;

  for (let a = 0; a < length; a++) {
      controlButtonsVar[a].innerHTML = "";
  }

  for (let j = 0; j < length; j++) {
    if (j != 0) {
      let up = document.createElement('button');
      up.className = 'up';
      up.textContent = 'up';
      controlButtonsVar[j].appendChild(up);
    } else {
      let up = document.createElement('button');
      up.style.visibility = 'hidden';
      up.textContent = 'up';
      controlButtonsVar[j].appendChild(up);
    }

    if (j != length - 1) {
      let down = document.createElement('button');
      down.className = 'dn';
      down.textContent = "dn";
      controlButtonsVar[j].appendChild(down);
    } else {
      let down = document.createElement('button');
      down.style.visibility = 'hidden';
      down.textContent = "dn";
      controlButtonsVar[j].appendChild(down);
    }

    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'x';
    controlButtonsVar[j].appendChild(remove);
  }
}

function webPrint() {
  htmlString = '';
  htmlString += '<thead><tr><th scope="col">Task Name</th><th scope="col">Priority</th><th scope="col">Completion Date</th><th scope="col">Controls</th></tr></thead><tbody>';

  for (var i = 0; i < todoListArray.length; i++) {
    htmlString += '<tr><th scope="row">' +
      todoListArray[i].tName + '</th><td>' +
      todoListArray[i].tPriority + '</td><td>' +
      todoListArray[i].dateOfCom +
      '</td><td class = "controlButtons"></td></tr>';
  }

  htmlString += '</tbody>';
  document.querySelector('#todoHTML').innerHTML = htmlString;
  addTableButtons();
}

function msg(str) {
  console.log(str);
}

htmlWrapper.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let btn = event.target.parentNode;
      let td = btn.parentNode;
      let tr = td.parentNode;
      tr.removeChild(td);
    }
    if (event.target.className == 'up') {
      let btn = event.target.parentNode;
      let tr = btn.parentNode;
      let prevTr = tr.previousElementSibling;
      let tbody = tr.parentNode;
      tbody.insertBefore(tr, prevTr);
    }
    if (event.target.className == 'dn') {
      let btn = event.target.parentNode;
      let tr = btn.parentNode;
      let nextTr = tr.nextElementSibling;
      let tbody = tr.parentNode;
      tbody.insertBefore(nextTr, tr);
    }
    if (event.target.id == "addBtn") {


    }
    addTableButtons();
  }
});

while (hasSearched === true) {
  if (inputSearchBox.text == todoListArray.Name) {

  }
}
