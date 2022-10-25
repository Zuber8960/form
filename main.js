let form=document.getElementById('my-form');
let itemList=document.getElementById('users');

localStorage.setItem('zuberahmad8960@gmail.com','{"name":"Zuber","email":"zuberahmad8960@gmail.com"}');
let li=document.createElement('li');
li.style.backgroundColor='#c05e5e';
li.style.color='white';
li.appendChild(document.createTextNode('Zuber'));
li.appendChild(document.createTextNode(" "));
li.appendChild(document.createTextNode('zuberahmad8960@gmail.com'));
delEdit(li);
itemList.appendChild(li);




//form submit event:
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    if(name=="" || email==""){
        return  alert("field is empty?");
    }

    let liTag =itemList.querySelectorAll('li');
    console.log(liTag);

    Array.from(liTag).forEach(function(item){
        let itemEmail = item.childNodes[2].textContent;
        if((itemEmail.indexOf(email) != -1)){
            item.style.display = 'none';
        }
    })

    let obj={
        name,
        email
    };
    localStorage.setItem(`${obj.email}`,JSON.stringify(obj));
    // creating of list of user.
    let li=document.createElement('li');
    li.style.backgroundColor='#c05e5e';
    li.style.color='white';

    li.appendChild(document.createTextNode(`${obj.name}`));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(`${obj.email}`));
    itemList.appendChild(li);

    //delete and edit button creating.
    delEdit(li);
    itemList.appendChild(li);
}


//create edit button

//delete itam event
itemList.addEventListener('click',removeItem);
function removeItem(e){
    // console.log(1);
    if(e.target.classList.contains('delete')){
        // console.log(1);
        if(confirm('Are you sure?')){
            li=e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}



//function for delete and edit button.
function delEdit(li){
    let del=document.createElement('button');
    let edit=document.createElement('button');
    del.className="btn btn-danger btn-sm float-right delete";
    edit.className="btn btn-danger btn-sm float-right";
    del.appendChild(document.createTextNode('Delete'));
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(del);
    li.appendChild(edit);
}






