const tasks_list = document.querySelector('.tasks-list');
const add_btn = document.querySelector('.add');
const task = document.getElementById("Input");
const clr_btn = document.querySelector('.clear-btn')
const task_board = document.querySelector('.tasks')
var index= 0;
var index2 = 99;
var Count = 0;
var Count2 = 0;
var array = [true,true,true,true,true]
var classes = []
var index_array = []
var index2_array = []
var Texts_array = []
var markedTask  = new Map()
let flag = true;

window.onload = function(){

    if(localStorage.getItem('index')){

        index            = localStorage.getItem('index')
        array            = JSON.parse(localStorage.getItem('taskarray'))
        index_array      = JSON.parse(localStorage.getItem('index_array'))
        index2_array     = JSON.parse(localStorage.getItem('index2_array'))
        index2           = JSON.parse(localStorage.getItem('index2'))
        Count            = JSON.parse(localStorage.getItem('Count'))
        Count2           = localStorage.getItem('Count2')
        classes          = JSON.parse(localStorage.getItem('classes'))
        Texts_array      = JSON.parse(localStorage.getItem('texts_array'))
        markedTask       = JSON.parse(localStorage.getItem('markedtask'))
        
        if(localStorage.getItem('flag')){
            flag     = localStorage.getItem('flag')
        }
        
        for(var i = 0;i<Count;i++){
            let newTask   = document.createElement('span')
            let delbtn    = document.createElement('button')
            let del_img   = document.createElement('img')
            let tick_btn  = document.createElement('button')
            let tick_img  = document.createElement('img')
            let container = document.createElement('div')
            let task_main = document.createElement('div')
            let line      = document.createElement('div')
            
            line.classList.add(`line${index2_array[i]}`)
            line.setAttribute('data-index', index2_array[i])
            line.setAttribute("id", `line${index_array[i]}`)
            line.classList.add(index_array[i])
   
            task_main.classList.add("taskmain")
            task_main.classList.add(`taskmain${index_array[i]}`)
   
            container.classList.add(`task${index_array[i]}`)
            container.setAttribute("onmouseover", "getContent(this)")
            container.setAttribute("onmouseout", "GetContent(this)")
   
            tick_btn.classList.add("tick-btn")
            tick_btn.setAttribute("id", index2_array[i])
            tick_btn.setAttribute("data-index", index2_array[i])
            tick_btn.setAttribute("onclick", "getTickIndex(this)")
   
            delbtn.classList.add(`delbtn${index_array[i]}`)
            delbtn.setAttribute("data-index", index_array[i])
            delbtn.setAttribute("id", index_array[i])
            delbtn.setAttribute("onclick", "getIndex(this)")
   
            del_img.classList.add("delimg")
            tick_img.classList.add("tickimg")
   
            newTask.classList.add("task")
   
            tick_img.src = "thumbnil/check-mark.png"
            del_img.src = "thumbnil/delete-bin.png"
   
            newTask.textContent = Texts_array[i];
            
            task_main.appendChild(newTask);
            delbtn.appendChild(del_img);
            tick_btn.appendChild(tick_img);
   
            container.appendChild(task_main);
            container.appendChild(delbtn);
            container.appendChild(line)
            container.appendChild(tick_btn);
   
            tasks_list.appendChild(container)

            if(markedTask[index2_array[i]] == "yes")
            {
                delbtn.classList.add("marked")
                if(window.innerWidth-13 <= 402){
                    task_main.style.left = "7.8%";
                }
                else{
                    task_main.style.left = "9%";
                }
                tick_btn.classList.add("marked")
                tick_btn.style.backgroundColor = "black"
                if(window.innerWidth-13 <= 402){
                    line.style.width = "29%"
                    line.style.left = "10%"
                }
                else{
                    line.style.width = "28%"
                    line.style.left = "9%"
                }
                
            }
        }
        
        task_board.innerHTML = `You have ${Count} pending tasks`
    }
}

add_btn.addEventListener('click', () =>{
    
    if(Count < 5 && task.value){
         let newTask = document.createElement('span')
         let delbtn = document.createElement('button')
         let del_img = document.createElement('img')
         let tick_btn = document.createElement('button')
         let tick_img = document.createElement('img')
         let container = document.createElement('div')
         let task_main = document.createElement('div')
         let line  = document.createElement('div')
         
         line.classList.add(`line${index2}`)
         line.setAttribute('data-index', index2)
         line.setAttribute("id", `line${index}`)
         line.classList.add(index)

         task_main.classList.add("taskmain")
         task_main.classList.add(`taskmain${index}`)

         container.classList.add(`task${index}`)
         container.setAttribute("onmouseover", "getContent(this)")
         container.setAttribute("onmouseout", "GetContent(this)")

         tick_btn.classList.add("tick-btn")
         tick_btn.setAttribute("id", index2)
         tick_btn.setAttribute("data-index", index2)
         tick_btn.setAttribute("onclick", "getTickIndex(this)")

         delbtn.classList.add(`delbtn${index}`)
         delbtn.setAttribute("data-index", index)
         delbtn.setAttribute("id", index)
         delbtn.setAttribute("onclick", "getIndex(this)")

         del_img.classList.add("delimg")
         tick_img.classList.add("tickimg")

         newTask.classList.add("task")

         tick_img.src = "thumbnil/check-mark.png"
         del_img.src = "thumbnil/delete-bin.png"

         newTask.textContent = task.value;
         
         task_main.appendChild(newTask);
         delbtn.appendChild(del_img);
         tick_btn.appendChild(tick_img);

         container.appendChild(task_main);
         container.appendChild(delbtn);
         container.appendChild(line)
         container.appendChild(tick_btn);

         task_board.innerHTML = `You have ${Count + 1} pending tasks`

         tasks_list.appendChild(container)
         
         classes.push(`task${index}`)
         index_array.push(index);
         index2_array.push(index2)
         Texts_array.push(task.value)

         array[index] = false

         localStorage.setItem('texts_array', JSON.stringify(Texts_array))
         localStorage.setItem('classes', JSON.stringify(classes))
         localStorage.setItem('taskarray', JSON.stringify(array))
         localStorage.setItem('index_array',JSON.stringify(index_array))
         localStorage.setItem('index2_array',JSON.stringify(index2_array))

         for(let i = 0;i<5;i++)
         {
             if(array[i] == true){
                 index = i;
                 break;
             }
         }

         index2++;
         Count++;
         Count2++
         task.value = ""
         localStorage.setItem('index', index)
         localStorage.setItem('index2', JSON.stringify(index2))
         localStorage.setItem('Count',JSON.stringify(Count))
         localStorage.setItem('Count2', JSON.stringify(Count2))
    }
    else{
        if(!task.value){
            alert("Can't add empty task")
        }else{
            alert("Your task Queue has been filled ! Clear if you want to add more task ")
        }
    }
})

clr_btn.addEventListener('click', ()=>{
    flag = false;
    localStorage.setItem('flag',flag)
   if(Count >= 1){

      while(tasks_list.children.length != 0){

           tasks_list.removeChild(tasks_list.childNodes[0])
      }
      
      array[0] = true
      array[1] = true
      array[2] = true
      array[3] = true
      array[4] = true

      Count = 0;
      Count2 = 0
      index = 0;
      index2 = 99;
      classes.length = 0;
      index2_array.length = 0;
      index_array.length = 0;
      Texts_array.length = 0;
      markedTask = new Map();
      
      localStorage.setItem('markedtask', JSON.stringify(markedTask))
      localStorage.setItem('texts_array', JSON.stringify(Texts_array))
      localStorage.setItem('classes', JSON.stringify(classes))
      localStorage.setItem('taskarray', JSON.stringify(array))
      localStorage.setItem('index_array',JSON.stringify(index_array))
      localStorage.setItem('index2_array',JSON.stringify(index2_array))
      localStorage.setItem('index', index)
      localStorage.setItem('index2', JSON.stringify(index2))
      localStorage.setItem('Count',JSON.stringify(Count))
      localStorage.setItem('Count2', JSON.stringify(Count2))

      task_board.innerHTML = `No such task is pending`
   }
   else{
       alert("can't clear from empty list !")
   }
})

function getIndex(e){

 if(e.classList.contains("marked")){
    e.classList.remove("marked") 
    const className = e.className;
    const del_btn = document.querySelector(`.${className}`)
    index = del_btn.getAttribute("data-index")
    // const del_val = document.getElementById("line" + index).getAttribute("data-index")
    // markedTask.delete(del_val)
    array[index] = true;

    localStorage.setItem('index', index)
    localStorage.setItem('taskarray', JSON.stringify(array))
    // localStorage.setItem('markedtask', JSON.stringify(markedTask))
    if(flag){
         
        let i = 0;
        for(i;i<=Count;i++)
        {
            if(classes[i] == `task${index}`)
            {
                if(Count > 0){
                    Count--;
                }
                tasks_list.removeChild(tasks_list.childNodes[i+1])
                break;
            }
        }
        classes.splice(i, 1)
        Texts_array.splice(i, 1)
        index2_array.splice(i,1)
        index_array.splice(i,1)
        localStorage.setItem('Count',JSON.stringify(Count))
        localStorage.setItem('index_array',JSON.stringify(index_array))
        localStorage.setItem('index2_array',JSON.stringify(index2_array))
        localStorage.setItem('texts_array', JSON.stringify(Texts_array))
        localStorage.setItem('classes',JSON.stringify(classes))
        if(Count == 0){
            task_board.innerHTML = `No such task is pending`
        }
        else{
            task_board.innerHTML = `You have ${Count} pending tasks`
        }
    }
    else{
        let i = 0;
        for(i;i<=Count;i++)
        {
            if(classes[i] == `task${index}`)
            {
                if(Count > 0){
                    Count--; 
                }
                tasks_list.removeChild(tasks_list.childNodes[i])
                break;
            }
        }
        classes.splice(i, 1)
        Texts_array.splice(i, 1)
        index2_array.splice(i,1)
        index_array.splice(i,1)
        localStorage.setItem('Count',JSON.stringify(Count))
        localStorage.setItem('index_array',JSON.stringify(index_array))
        localStorage.setItem('index2_array',JSON.stringify(index2_array))
        localStorage.setItem('texts_array', JSON.stringify(Texts_array))
        localStorage.setItem('classes',JSON.stringify(classes))
        if(Count == 0){
            task_board.innerHTML = `No such task is pending`
        }
        else{
            task_board.innerHTML = `You have ${Count} pending tasks`
        }
    }
}else{
    alert("Cannot remove before the completion of the task")
}
}

function getTickIndex(e){
    
    if(!e.classList.contains("marked")){
        e.classList.add("marked")
        e.style.backgroundColor = "black"
        const data = e.getAttribute("data-index")

        markedTask[data] = "yes"
        localStorage.setItem('markedtask', JSON.stringify(markedTask))

        const line = document.querySelector(`.line${data}`)

        if(line.classList.contains("0")){
            document.querySelector('.delbtn0').classList.add("marked")
            if(window.innerWidth-13 <= 402){
        
                document.querySelector('.taskmain0').style.left = "7.8%";
            }
            else{
                document.querySelector('.taskmain0').style.left = "9%";
            }
        }
        else if(line.classList.contains("1")){
            document.querySelector('.delbtn1').classList.add("marked")
            if(window.innerWidth-13 <= 402){
                document.querySelector('.taskmain1').style.left = "7.8%";
            }
            else{
                document.querySelector('.taskmain1').style.left = "9%";
            }
        }
        else if(line.classList.contains("2")){
            document.querySelector('.delbtn2').classList.add("marked")
            if(window.innerWidth-13 <= 402){
                document.querySelector('.taskmain2').style.left = "7.8%";
            }
            else{
                document.querySelector('.taskmain2').style.left = "9%";
            }
        }
        else if(line.classList.contains("3")){
            document.querySelector('.delbtn3').classList.add("marked")
            if(window.innerWidth-13 <= 402){
                document.querySelector('.taskmain3').style.left = "7.8%";
            }
            else{
                document.querySelector('.taskmain3').style.left = "9%";
            }
        }
        else{
            document.querySelector('.delbtn4').classList.add("marked")
            if(window.innerWidth-13 <= 402){
                document.querySelector('.taskmain4').style.left = "7.8%";
            }
            else{
                document.querySelector('.taskmain4').style.left = "9%";
            }
        }
        if(window.innerWidth-13 <= 402){
            line.style.width = "29%"
            line.style.left = "10%"
        }
        else{
            line.style.width = "28%"
            line.style.left = "9%"
        }

    }else{
        alert("This task has already been done")
    }
}    

function getContent(e){
         const className =  e.className
         const container = document.querySelector(`.${className}`)
         const data1 = container.children[1].getAttribute("data-index")
         const last_1 = document.getElementById(data1)
         const data2 = container.lastElementChild.getAttribute("data-index")
         const last_2 = document.getElementById(data2)
         last_2.style.display = "initial"
         last_1.style.display = "initial"

}
function GetContent(e){
         const className =  e.className
         const container = document.querySelector(`.${className}`)
         const data = container.children[1].getAttribute("data-index")
         const last_1 = document.getElementById(data)
         const data2 = container.lastElementChild.getAttribute("data-index")
         const last_2 = document.getElementById(data2)
         last_2.style.display = "none"
         last_1.style.display = "none"

}




