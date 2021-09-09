const email = document.getElementById('email');
const error = document.getElementById('error');
document.getElementById('submit').addEventListener('click',()=>{
    if(email.value === ''){
        error.innerHTML=`
        <p class="alert alert-danger">E-mail Field is Required</p>
        `;
        return;
    }
    let filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (filter.test(email.value)){
        error.innerHTML=`
        <p class="alert alert-success">Login Successfully</p>
        `;
    }else {
        error.innerHTML=`
        <p class="alert alert-danger">E-mail not validate</p>
        `;
  }
  email.value ='';
})