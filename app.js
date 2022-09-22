const addList = document.querySelector('.add');
const addTemplate = document.querySelector('.todos');
const Search = document.querySelector('.Search input');

const getElement = (key,todo) =>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center text-light" value="${key}">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>`
    addTemplate.innerHTML += html;
} ;

if( localStorage.length == 0 || localStorage.length == null)
{
    var i=0;
}
else{
for(k=0;k<localStorage.length ; k++)
{
    var key = Object.keys(localStorage);
    console.log(Object.keys(localStorage));
    var value = localStorage.getItem(key[k]);
    console.log(value);
    getElement(key[k],value);
}
var i=localStorage.length+1;
}



addList.addEventListener('submit',e=>{
    e.preventDefault();
    
    const todo = addList.add.value.trim();
    i++;
    console.log(i);
    if(todo.length){ 
        localStorage.setItem(i,todo);
        var value = localStorage.getItem(i);
        console.log(value);
        getElement(i,value);
        addList.reset();
    }
    
    console.log(i);
});

addTemplate.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        localStorage.removeItem(e.target.parentElement.value);
        console.log(e.target.parentElement.value);
    }
});

function filterTodos(trem){
    Array.from(addTemplate.children)
        .filter((todo)=> !todo.textContent.includes(trem))
        .forEach((todo) => todo.classList.add('d-none'));

    Array.from(addTemplate.children)
        .filter((todo)=> todo.textContent.includes(trem))
        .forEach((todo) => todo.classList.remove('d-none'));    
};

Search.addEventListener('keyup',()=>{
    const trem = Search.value.trim();
    filterTodos(trem);
});