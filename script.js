let input = document.getElementById("input");
let addbtn = document.getElementById("add");
let ul = document.getElementById("pending-todo");

let arr=JSON.parse(localStorage.getItem('todo'))?JSON.parse(localStorage.getItem('todo')):[]

addbtn.addEventListener("click", () => {

       if(input.value===''){
        return
       }
       
       arr.push(input.value)
       localStorage.setItem('todo',JSON.stringify(arr))
       
       input.value=''
       window.location.reload()
      
      
});

const show=()=>{

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    todo = `<li>
      <div class="todos">
        
        <span id='todo'>${element}</span>
        <div class="operations">
          
          <button class="delete" onclick="deleteItem(${i})">Done</button>
 
        </div>
      </div>
      </li>`;
      let li=document.createElement('li')
       li.innerHTML=todo
       ul.append(li)

  }

}

window.onload=show()


const deleteItem=(index)=>{
     arr.splice(index,1)
     localStorage.setItem('todo',JSON.stringify(arr))
     window.location.reload()
}
