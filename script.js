let regForm = document.getElementById('formId');

let regEmail = document.getElementById('regemail');
let regName = document.getElementById('regname');
let gender = document.getElementsByName('gender');
let regAddress = document.getElementById('regaddress');
let local = document.getElementsByName('locals');
let educate = document.getElementsByName('educate');
let regMobile = document.getElementById('regmobile');
let skills = document.getElementsByName('skills');
let imgFile = document.getElementById('imgFile');
let pdfFile = document.getElementById('pdfFile');
let regLink = document.getElementById('reglink');
let regAns =document.getElementById('regans');






regForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  Validate();
  
})



function Validate(){
  // getting values from input 
  let regEmailValue = regEmail.value.trim();
  let regNameValue = regName.value.trim();
  let regAddressValue = regAddress.value.trim();
  let regMobileValue = regMobile.value.trim();
  let imgFileValue = imgFile.value;
  let pdfFileValue = pdfFile.value;
  let regLinkValue = regLink.value.trim();
  let regAnsValue = regAns.value.trim();
  


  // email validation 
  if(regEmailValue === ''){
    setErrorFor(regEmail,'email cannot be blank');
  }
  else if(!isEmail(regEmailValue))
  {
    setErrorFor(regEmail,'enter a valid email');
  }
  else{
    setSuccessFor(regEmail);
  }

  // name validation
  if(regNameValue === ''){
    setErrorFor(regName,'name cannot be blank');
  }
  else if(regNameValue.length>=3)
  {
    setSuccessFor(regName);
  }
  else{
    setErrorFor(regName,'Minimum 3 character required');
  }

  // gender Validation
  for(i=0;i<gender.length;i++){
      if(gender[i].checked===true){
        setGender('hidden');
        return true;
      }else{
        setGender('visible');
       
      }
  }

  //Permanent Address Validation
  if(regAddressValue === ''){
    setErrorFor(regAddress,'Address cannot be blank');
  }
  else if(regAddressValue.length>=10)
  {
    setSuccessFor(regAddress);
  }else{
    setErrorFor(regAddress,'Minimum 10 character required');
  }

  //Location Validation
  for(j=0;j<local.length;j++){
    if(local[j].checked===true){
        setCheck('hidden');
      return true;
    }else{
        setCheck('visible');
    }

  }

  //Education Validation 
  for(j=0;j<educate.length;j++){
    if(educate[j].checked===true){
        setEdu('hidden');
      return true;
    }else{
        setEdu('visible');
    }

  }

  // Mobile validation
  if(regMobileValue === ''){
    setErrorFor(regMobile,'mobile cannot be blank');
  }
  else if(!isMobile(regMobileValue))
  {
    setErrorFor(regMobile,'enter a valid email');
  }
  else{
    setSuccessFor(regMobile);
  }

  //skill validation
  for(j=0;j<skills.length;j++){
    if(skills[j].checked===true){
        setSkill('hidden');
      return true;
    }else{
        setSkill('visible');
    }

  }

  // picture validation
  if( imgFileValue != ''){
    setSuccessFor(imgFile);
  }else{
    setErrorFor(imgFile,'picture cannot be blank');
  }

  // Resume validation
  if( pdfFileValue != ''){
    setSuccessFor(pdfFile);
  }else{
    setErrorFor(pdfFile,'file cannot be blank');
  }

  // Linked validation
  if(regLinkValue === ''){
    setErrorFor(regLink,'Linkedin cannot be blank');
  }
  else{
    setSuccessFor(regLink);
  }

  // answer validation 
  if(regAnsValue === ''){
    setErrorFor(regAns,'Answer cannot be blank');
  }
  else if(regNameValue.length>=10)
  {
    setSuccessFor(regAns);
  }
  else{
    setErrorFor(regAns,'Write about yourself minimum 10 words ');
  }

}
//----------------------------- Error Function   -------------------------- //
function setErrorFor(input,message){
  const formFloating = input.parentElement;
  const small = formFloating.querySelector('small');
  small.innerText = message;
  formFloating.className ='form-group error';
}
//----------------------------- Error Function   -------------------------- //

//----------------------------- success Function-------------------------- //
function setSuccessFor(input){
  const formFloating = input.parentElement;
  formFloating.className='form-group success';
}
//----------------------------- success Function-------------------------- //

//----------------------------- email validation using regX-------------------------- //
function isEmail(email){
  return /^[a-zA-z]{5,15}@[a-z]{4,6}\.[a-z]{3,4}([.a-z]{2,3})?$/.test(email);
  

  // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  // ^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$
}
//----------------------------- email validation using regX-------------------------- //
function isMobile(mobileN){
  return /^[6-9]\d{9}$/.test(mobileN);
}

function setGender(input){
  let radios=document.getElementById('genderSmall');
  radios.style.visibility=input;
}

function setCheck(input){
  let check = document.getElementById('checkSmall');
  check.style.visibility = input;
}

function  setEdu(input){
  let edu = document.getElementById('eduSmall');
  edu.style.visibility = input;
}

function setSkill(input){
  let ski = document.getElementById('skillSmall');
  ski.style.visibility = input 
}