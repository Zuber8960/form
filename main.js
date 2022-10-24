let form=document.getElementById('my-form');

//form submit event:
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    // console.log('hi');
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    // console.log(name,email);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
}










// localStorage.setItem('name','zuber');
// localStorage.setItem('age', 26);
// localStorage.setItem('school','Sharpner');

// console.log(localStorage.getItem('age'));













