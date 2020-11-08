//Selector 
var todoInput=document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-list");
var count=0;

//Event
todoButton.onclick=create;
todoList.onclick=checkdelete;

//Function
function create(e){
    e.preventDefault();
    if(todoInput.value==""){
        alert("Text field cannot be Emptied");
    }
    else{
        var newdiv=document.createElement("div");
        newdiv.classList.add("todo");
        var newli=document.createElement("li");
        newli.classList.add("todo-item");
        newli.innerHTML=todoInput.value;
        newdiv.appendChild(newli);
        todoInput.value="";
        var checkbtn=document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML='<i class="fa fa-check"></i>';
        newdiv.appendChild(checkbtn);
        var delbtn=document.createElement("button");
        delbtn.classList.add("delete-btn");
        delbtn.innerHTML='<i class="fa fa-trash"></i>';
        newdiv.appendChild(delbtn);
        todoList.appendChild(newdiv);
        var body=document.body;
        count++;
        if(count==1){
            body.style="background-image: linear-gradient(rgb(17, 211, 98),rgb(1, 152, 240))";
            newli.style="background-image: linear-gradient(rgb(255, 60, 0),rgb(226, 189, 26))";
        }
        else if(count==2){
            body.style="background-image: linear-gradient(rgb(255, 81, 0),rgb(226, 179, 26))";
            newli.style="background-image: linear-gradient(rgb(17, 211, 33),rgb(1, 192, 240))";
        }
        else if(count==3){
            body.style="background-image: linear-gradient(rgb(233, 12, 104),rgb(31, 113, 206))";
            newli.style="background-image: linear-gradient(rgb(159, 164, 214),rgb(228, 66, 79))";
        }
        else if(count==4){
            body.style="background-image: linear-gradient(rgb(32, 149, 178),rgb(228, 66, 128))";
            newli.style="background-image: linear-gradient(rgb(233, 12, 159),rgb(31, 113, 206))";
        }
        else if(count==5){
            body.style="background-image: linear-gradient(rgb(240, 185, 6),rgb(233, 24, 233),rgb(74, 241, 102))";
            newli.style="background-image: linear-gradient(rgb(75, 112, 235),rgb(221, 167, 179))";
            count=0;
        }
    } 
}
function checkdelete(e){
    var item=e.target;
    if(item.classList[0]==="delete-btn"){
        var parent=item.parentNode;
        var mes=confirm("Do you want to delete?");
        if(mes){
          parent.remove();
        }   
    }
    if(item.classList[0]==="check-btn"){
        var parent=item.parentNode;
        parent.classList.toggle("completed");
    }
}