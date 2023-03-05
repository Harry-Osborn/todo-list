// this is for adding the checked functionality
let container = document.getElementById("container");

container.addEventListener("click",(e)=>{

    // this is for checking and unchecking todos
    if(e.target.type == "checkbox"){
        if(e.target.checked){
            e.target.nextElementSibling.classList.add("line-through");
            e.target.parentNode.parentNode.classList.add("bg-green-500");
        }
    
        else if(!e.target.checked){
            e.target.nextElementSibling.classList.remove("line-through");
            e.target.parentNode.parentNode.classList.remove("bg-green-500");
        }
    }

    // this is for deleting an todo
    else if(e.target.classList[5] == "image"){
        e.target.parentElement.remove()
    }
})



// this is for adding a todo
let create = document.getElementById("new_todo");


create.addEventListener("keydown",(e)=>{

    // this is used for creating the new todo html template
    const generateTemplate = todo =>{
        
        const html = `
            <div class="flex flex-row justify-between bg-yellow-300 my-2 text-2xl text-center font-extrabold text-green-900 rounded-xl p-2">
                <div class="flex flex-row w-5/6">
                    <input type="checkbox" class="inline-block mt-1.5 mx-2 rounded-full w-5 h-5 focus:ring-0 bg-transparent hover:cursor-pointer border-red-500 border-2 text-red-500 tick">
                    <p class="inline-block text-left strike decoration-red-600">${todo}</p>
                </div>
                <img src="images/closed-bin.png" class="w-7 h-7 mt-0.5 hover:cursor-pointer hover:bg-red-500 image">
            </div>
            `;

        container.innerHTML += html;
    }

    // this is used for adding the todo after enter is clicked
    if(e.key == "Enter"){
        e.preventDefault();

        let todo = create.value.trim();

        // this is for not creating empty todos
        if(todo.length){
            generateTemplate(todo);
            create.value="";
        }
    }
})



// this for searching a todo

let search = document.getElementById("search");

//this is the function which displays all the related search result
const filter_todo = (term) =>{

    Array.from(container.children).forEach(element => {

        if(!(Array
                .from(element.children)[0]
                .children[1]
                .textContent.includes(term)))
                {
                    element.classList.add("hidden");
        }

        else if((Array
            .from(element.children)[0]
            .children[1]
            .textContent.includes(term)))
            {
                element.classList.remove("hidden");
        }
    });
};

// this starts searching for the typed todo when the key is released
search.addEventListener("keyup",(e)=>{
    const term = search.value.trim();
    filter_todo(term);
});