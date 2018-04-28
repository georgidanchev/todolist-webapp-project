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
    tPriority: 1
  }
];

// run this code only when script first loads.
window.onload = function() {
  webPrint();
};


function addTableButtons() {
  controlButtonsVar = document.querySelectorAll('.controlButtons');

  for (let j = 0; j < controlButtonsVar.length; j++) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = "up";
    controlButtonsVar[j].appendChild(up);

    let down = document.createElement('button');
    down.className = 'dn';
    down.textContent = "dn";
    controlButtonsVar[j].appendChild(down);

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

htmlWrapper.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.id == "addBtn") {}
  }
});

while (hasSearched === true) {
  if (inputSearchBox.text == todoListArray.Name) {

  }
}
