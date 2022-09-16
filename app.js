const addList = document.querySelector('.add');
const addTemplate = document.querySelector('.todos');
const Search = document.querySelector('.Search input');
 
const getElement = todo =>{
    const html=`<li class="list-group-item d-flex justify-content-between align-items-center text-light">
        <span>${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>`
    addTemplate.innerHTML += html;
} ;

addList.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addList.add.value.trim();
    if(todo.length){
       getElement(todo); 
       addList.reset();
    }
    
});
addTemplate.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
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