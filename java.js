
//Used to have the button add something to the list.
document.getElementById("button").onclick = function (){
//Created list item to hold user input.
  var listItem = document.createElement("li");
//Created a holder to store the user input from text box.
  var userInput = document.getElementById("textInput").value;
//Changing text of the created <li> from empty to userInput  
  listItem.innerHTML = userInput;
//Getting the changed list item (empty to userInput) and adding to the <ul> in the html.
  document.getElementById("list").appendChild(listItem);
//testing to see if everything works up to this point. 
	console.log(document.getElementById("textInput").value);
//Counting function that should displat in items remaining section.
	var counter = document.getElementById("list").getElementsByTagName("li").length;
//Use inner HTML to change the <p id="itemCount" to the value of counter.
  document.getElementById("itemCount").innerHTML = counter;

}

//This is the fuction that when the checkbox is clicked it will reduce the counter variable (i.e "Items remaining") by 1. 
document.getElementById("completedCheckbox").onclick = function () {
//Redefining the counter since it was a local variable in the onClick for the button and then console.log to test to see if it was actually grabbing the counter correctly. 
 var counter = document.getElementById("list").getElementsByTagName("li").length;
 console.log(counter)
//Defined the reducing aspect of the checkbox and console.log() to see if it reduced by one
 var reduction = counter - 1
 console.log(reduction)
 document.getElementById("itemCount").innerHTML = reduction;
}



//NEED TO HAVE A COMPLETED CHECK BOX BE ADDED EVERYTIME A LIST ITEM IS CREATED. 
//NEED TO HAVE A REMOVE CHECKBOX BE ADDED EVERYTIME A LIST ITEM IS CREATED.
//NEED TO HAVE THE REMOVE CHECK BOX REMOVE CORRESPONDING LIST ITEM.