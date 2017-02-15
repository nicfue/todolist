//skapa två listor
 var myList = document.getElementById('myList');
 var myList2 = document.getElementById('myList2');
//skapa ett inmatningsfält för att lägga till sysslor
function addTodo() {
var stuff = document.getElementById('todoInput').value;
 var text = document.createTextNode(stuff);
 var newStuff = document.createElement('li');
 newStuff.className = "listItems";
 newStuff.appendChild(text);
 myList.appendChild(newStuff);

//skapa en "ta bort knapp" på listan
var update = document.createElement("div");
  var removeButton = document.createTextNode("\u00D7");
  update.className = "remove";  
  update.appendChild(removeButton);
  newStuff.appendChild(update);
}

myList.addEventListener("mouseover", removeToDo);
 //tar bort en syssla från första listan
function removeToDo() {
var remove = document.getElementsByClassName("remove");
var i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      myList2.appendChild(div);
    };
  }
}

myList2.addEventListener("mouseover", doneList);
function doneList() {
var remove = document.getElementsByClassName("remove");
var i;
  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      myList2.removeChild(div); 
    };
  }
}  


