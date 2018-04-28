var htmlString = "";
var htmlWrapper = document.querySelector('body');
var inputSearchBox = document.querySelector('#searchBox');
var hasSearched = false;

var todoListArray = [{
  tName: 'Cook some food',
  dateOfCom: '03/05/18',
  tPriority: 1,
  controls: "/"
}, {
  tName: 'Take out the trash',
  dateOfCom: '03/05/18',
  tPriority: 2,
  controls: "/"
},
{
  tName: 'Go out for a jog',
  dateOfCom: '03/05/18',
  tPriority: 1,
  controls: "/"
},
{
  tName: 'Clean the house',
  dateOfCom: '03/05/18',
  tPriority: 1,
  controls: "/"
}];

// run this code only when script first loads.
window.onload = function() {
  webPrint();
};

function webPrint() {
  htmlString = '';
  htmlString += '<thead><tr><th scope="col">Task Name</th><th scope="col">Priority</th><th scope="col">Completion Date</th><th scope="col">Controls</th></tr></thead><tbody>';

  for (var i = 0; i < todoListArray.length; i++) {
      htmlString += '<tr><th scope="row">' + todoListArray[i].tName + '</th><td>' + todoListArray[i].tPriority + '</td><td>' + todoListArray[i].dateOfCom + '</td><td>' + todoListArray[i].controls+ '</td></tr>';
  }

  htmlString += '</tbody>';
  document.querySelector('#todoHTML').innerHTML = htmlString;
  console.log(htmlString);
}

htmlWrapper.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.id == "addBtn") {}
  }
});

while (hasSearched === true) {
  if(inputSearchBox.text == todoListArray.Name) {

  }
}
