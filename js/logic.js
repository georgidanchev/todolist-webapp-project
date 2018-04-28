var htmlString = "";
var htmlWrapper = document.querySelector('body');
var inputSearchBox = document.querySelector('.searchBox');

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

function webPrint() {
  htmlString = '';
  htmlString += '<thead><tr><th scope="col">Task Name</th><th scope="col">Priority</th><th scope="col">Date</th></tr></thead><tbody>';
  for (var a = 0; a < todoListArray.length; a++) {
    htmlString += '<tr>';
    specificPrint(a);
    htmlString += '</tr>';
  }
  htmlString += '</tbody>';
  document.querySelector('#todoHTML').innerHTML = htmlString;
  console.log(htmlString);
}

function specificPrint(i) {
  htmlString += '<th scope="row">' + todoListArray[i].tName + '</th><td>' + todoListArray[i].tPriority + '</td><td>' + todoListArray[i].dateOfCom + '</td>';
}

htmlWrapper.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.id == "addBtn") {}
  }
});
