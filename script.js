const form = document.getElementById('form');
const email = document.getElementById('email');
const names = document.getElementById('name');
const age=document.getElementById('age');
const address= document.getElementById('address');
const caddress = document.getElementById('caddress');
const profile=document.getElementById('profile');
const ans=document.getElementById('ans');

console.log(names);

form.addEventListener('submit',(e)=>{
 e.preventDefault();

  checkInputs();

})


function checkInputs(){
  
  const emailValue = email.value.trim();
  const namesValue = names.value.trim();
  const ageValue = age.value.trim();
  const addressValue = address.value.trim();
  const caddressValue = caddress.value.trim();
  const profileValue = profile.value.trim();
  const ansValue = ans.value.trim();

  if(namesValue===''){
      setErrorFor(names,'name cannot be blank');
  }else{
      setSuccessFor(names);
  }
}

function setErrorFor(input,message){
    const formFloating = input.parentElement;
    console.log(formFloating);
    const small = formFloating.querySelector('small');
   
    small.innerText=message;

    formFloating.className='form-floating error';
}

function setSuccessFor(input){
  const formFloating = input.parentElement;
  formFloating.className='form-floating success';
}