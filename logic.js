var htmlString = "";
var htmlBody = document.querySelector('.wrapper');

var todoListArray = [{
    tName: 'cook some food',
    dateOfCom: '01/05/18',
    tPriority: 1
  },{
    tName: 'Take out the trash',
    dateOfCom: '03/05/18',
    tPriority: 2
  }];

function printSpecific(i) {
htmlString += '<li>' + 'Task Name: ' + todoListArray[i].tName + ' Priority: ' +
todoListArray[i].tPriority + ' DOC: '+ todoListArray[i].dateOfCom;
}

function printToWeb() {
  htmlString = '<ol>';

  for (var i = 0; i < todoListArray.length; i++) {
    printSpecific(i);
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

function addToWeb(message) {
  var div = document.getElementById('todoHTML');

  div.innerHTML += message;
}

htmlBody.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.id == "showStuff") {
      printToWeb();
    }
  }
});
//
// if( true){
//
//   printButton
// }
