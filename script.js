//skapa ett inmatningsfält för att lägga till sysslor
function addTodo() {
var stuff = document.getElementById('todoInput').value;
 var text = document.createTextNode(stuff);
 var newStuff = document.createElement('li');
 newStuff.appendChild(text); 
document.getElementById('myList').appendChild(newStuff);

//skapa en "ta bort knapp" på listan
var update = document.createElement("update");
  var removeButton = document.createTextNode("\u00D7");
  update.className = "remove";  
  update.appendChild(removeButton);
  newStuff.appendChild(update);


//tar bort en syssla när man trycker på knappen
removeButton = document.getElementsByClassName("remove");
var i;
for (i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
    var div = this.parentElement;
    };
}

  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  stuff.insertBefore(newStuff, childhood[0]);
}



