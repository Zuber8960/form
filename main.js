let form=document.getElementById('my-form');

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
}









// localStorage.setItem('name','zuber');
// localStorage.setItem('age', 26);
// localStorage.setItem('school','Sharpner');

// console.log(localStorage.getItem('age'));













