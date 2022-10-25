let form=document.getElementById('my-form');
let itemList=document.getElementById('users');

//form submit event:
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    
    let obj={
        name,
        email
    };
    localStorage.setItem(`${obj.name}`,JSON.stringify(obj));

    // creating of list of user.
    let li=document.createElement('li');
    li.className='item';
    li.style.backgroundColor='#c05e5e';
    li.style.color='white';

    li.appendChild(document.createTextNode(`${obj.name}`));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(`${obj.email}`));
    itemList.appendChild(li);

    // console.log(li);
}









// localStorage.setItem('name','zuber');
// localStorage.setItem('age', 26);
// localStorage.setItem('school','Sharpner');

// console.log(localStorage.getItem('age'));













