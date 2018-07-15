var htmlWrapper = document.querySelector("body"),
  searchBox = document.querySelector("#searchBox"),
  searchNodeColor = "rgba(214,95,92,0.5)",
  colorChangedNode,
  defultNodeColor,
  htmlString,
  controlButtonsVar,
  length;

var todoListArray = [];

/* Debug only function. */
function msg(str) {
  console.log(str);
}

/* This is used if no data is present in the array. */
function addExampleData() {
  todoListArray = [{
      tName: "Cook some food",
      dateOfCom: "03/05/18",
      tPriority: "1st"
    }, {
      tName: "Take out the trash",
      dateOfCom: "03/05/18",
      tPriority: "2nd"
    },
    {
      tName: "Go out for a jog",
      dateOfCom: "03/05/18",
      tPriority: "1st"
    }
  ];
}

/* When the page loads. do. this. */
window.onload = function() {

  if (localStorage.getItem("arrayData", todoListArray)) {
    tableLoad();
    // msg("Load Table Data");
  } else {
    addExampleData();
    tableSave();
    // msg("Save Table Data");
  }
  tablePrint();
};

/* Retrieve array data and convert back from string format. */
function tableLoad() {
  var string = localStorage.getItem("arrayData", string);
  todoListArray = JSON.parse(string);
}

/* Save array data locally, but in a string format. */
function tableSave() {
  localStorage.setItem("arrayData", JSON.stringify(todoListArray));
}

/* This function adds stuff to the table array. */
function addToTable(nameInput, dateInput, prioInput) {
  todoListArray.push({
    tName: nameInput,
    dateOfCom: dateInput,
    tPriority: prioInput
  });
}

/* This controls the modal visibility. */
function modalVis(vis) {
  var pageCover = document.querySelector("#pageCover"),
    modalBody = document.querySelector("#modalWrapper");

  if (vis === true) {
    pageCover.style.display = "block";
    modalBody.style.display = "flex";
  } else {
    pageCover.style.display = "none";
    modalBody.style.display = "none";
  }
}

/* This responds to add button function  to create table buttons. */
function processTableBtn(j, bName, visibility) {
  if (bName == "up") {
    let up = document.createElement("button");
    up.textContent = "u";
    if (visibility == true) {
      up.className = "up";
    } else {
      up.className = "lockedBtn";
      up.style.visibility = "hidden";
    }
    controlButtonsVar[j].appendChild(up);
  } else if (bName == "down") {
    let down = document.createElement("button");
    down.textContent = "d";
    if (visibility == true) {
      down.className = "down";
    } else {
      down.className = "lockedBtn";
      down.style.visibility = "hidden";
    }
    controlButtonsVar[j].appendChild(down);
  } else if (bName == "remove") {
    let remove = document.createElement("button");
    remove.textContent = "x";
    if (visibility == true) {
      remove.className = "remove";
    }
    controlButtonsVar[j].appendChild(remove);
  }
}

/* This function resets and adds all table buttons. */
function addTableBtns() {
  controlButtonsVar = document.querySelectorAll(".controlButtons");
  length = controlButtonsVar.length;

  // A loop which empties all the html control button fields.
  for (let x = 0; x < length; x++) {
    controlButtonsVar[x].innerHTML = "";
  }

  for (let j = 0; j < length; j++) {
    if (j !== 0) {
      processTableBtn(j, "up", true);
    } else {
      processTableBtn(j, "up", false);
    }

    if (j !== length - 1) {
      processTableBtn(j, "down", true);
    } else {
      processTableBtn(j, "down", false);
    }
    processTableBtn(j, "remove", true);
  }
}

function createTableRow() {
  var nameInput = document.querySelector("#taskNameInput"),
    prioInput = document.querySelector("#taskPrioInput"),
    dateInput = document.querySelector("#taskDateInput");
  var newDate = dateFixer(new Date(dateInput.value));

  if (nameInput.value !== 0 && prioInput.value !== 0 && dateInput.value !== 0) {
    addToTable(nameInput.value, newDate, prioInput.value);
    tablePrint();
    tableSave();
    modalVis(false);

    nameInput.value = "";
    prioInput.value = "";
    dateInput.value = "";
  }
}

/* Fixes default date format for date input modal field. */
function dateFixer(date) {
  var d = date.getDate();
  var m = date.getMonth() + 1; //Month from 0 to 11
  var y = date.getFullYear();
  return (d <= 9 ? "0" + d : d) + "/" + (m <= 9 ? "0" + m : m) + "/" + y;
}

/* This responds to table control button events. */
function tableBtnRespond(btnClass, eventTarget) {
  let td = eventTarget.target.parentNode;
  let tr = td.parentNode;
  let tbody = tr.parentNode;

  if (btnClass == "remove") {
    tbody.removeChild(tr);
    todoListArray.splice(tr.rowIndex, 1);
  } else if (btnClass == "up") {
    let prevTr = tr.previousElementSibling;
    tbody.insertBefore(tr, prevTr);
    arraymove(todoListArray, tr.rowIndex, tr.rowIndex - 1);
  } else if (btnClass == "down") {
    let nextTr = tr.nextElementSibling;
    arraymove(todoListArray, tr.rowIndex - 1, tr.rowIndex);
    tbody.insertBefore(nextTr, tr);
  }

  addTableBtns();
  tableSave();
}

/* Sub-function which help mirror table rows and the array. */
function arraymove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}


/* Search function - gets all task names with class .tName
and looks for matches then passes sub-function to narrow
down the search. If match is found changes node color. */
function searchObjArray() {
  var tableNames = document.querySelectorAll(".tName");

  if (colorChangedNode) {
    colorChangedNode.style.background = defultNodeColor;
  }

  if (searchBox.value != 0) {
    var uSearch = searchBox.value.toLowerCase();
    for (var i = 0; i < tableNames.length; i++) {
      if (tableNames[i].textContent.toLowerCase().match(uSearch)) {
        if (findWord(uSearch, tableNames[i].textContent.toLowerCase())) {
          var targetNode = tableNames[i].parentNode;
          defultNodeColor = targetNode.style.background;
          colorChangedNode = targetNode;
          colorChangedNode.style.background = searchNodeColor;
        }
      }
    }
  }
  searchBox.value = "";
}

/* Search Sub-Function which looks for a specific
word to avoid getting multiple search matches. */
function findWord(word, str) {
  return RegExp("\\b" + word + "\\b").test(str);
}

/* Single click event listener which handles all
button clicks according to id thought even target. */
htmlWrapper.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    var bName = event.target.className;

    if (event.target.parentNode.className == "controlButtons") {
      tableBtnRespond(bName, event);
    }
    if (event.target.id == "srchBtn") {
      searchObjArray();
    }
    if (event.target.id == "submitButton") {
      createTableRow();
    }
    if (event.target.id == "addBtn") {
      modalVis(true);
    }
    if (event.target.id == "closeModal") {
      modalVis(false);
    }
  }
});

/* Event listener for the enter key. */
htmlWrapper.addEventListener("keyup", (event) => {
if(event.target.tagName == "INPUT") {
  if (event.keyCode == 13) {
    searchObjArray();
    msg(event.target.tagName);
  }
}
  if (event.keyCode == 27) {
   modalVis(false);
   msg(event.target.tagName);
  }
});

/* Build the table by looping thought the array and
building html from string then convert it to html */
function tablePrint() {
  htmlString = '';
  htmlString += '<thead><tr><th scope="col">T.NAME</th><th scope="col">P</th><th scope="col">D.O.C</th><th scope="col">C</th></tr></thead><tbody>';

  for (var i = 0; i < todoListArray.length; i++) {
    htmlString += '<tr><th scope="row" class="tName">' +
      todoListArray[i].tName + '</th><td>' +
      todoListArray[i].tPriority + '</td><td>' +
      todoListArray[i].dateOfCom +
      '</td><td class = "controlButtons"></td></tr>';
  }

  htmlString += "</tbody>";
  document.querySelector("#todoHTML").innerHTML = htmlString;
  addTableBtns();
}
