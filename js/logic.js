var htmlString = "";
var htmlWrapper = document.querySelector('.wrapper');
var inputSearchBox = document.querySelector('#searchBox');

var todoListArray = [{
  tName: 'Cook some food',
  dateOfCom: '01/05/18',
  tPriority: 1
}, {
  tName: 'Take out the trash',
  dateOfCom: '03/05/18',
  tPriority: 2
}];

// run this code only when script first loads.
window.onload = function() {
  webPrint(); 
};

function specificPrint(i) {
  htmlString += '<li>' + 'Task Name:   ' + todoListArray[i].tName + '   Priority:   ' +
    todoListArray[i].tPriority + '   DOC:   ' + todoListArray[i].dateOfCom;
}

function webPrint() {
  htmlString = '<ol>';

  for (var i = 0; i < todoListArray.length; i++) {
    specificPrint(i);
  }

  htmlString += '</ol>';
  webOverwrite(htmlString);
}

function webOverwrite(message) {
  var div = document.getElementById('todoHTML');

  // innerHTML removes the contents and replaces them with new stuff which is compounded.
  div.innerHTML = '<ol>' + message + '</ol>';

  /* Put below code in index.HTML to make this function work.
  <div id="message"> </div>
  */
}

function webAdd(message) {
  var div = document.getElementById('todoHTML');

  div.innerHTML += message;
}

htmlWrapper.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.id == "showStuff") {

    }
  }
});
