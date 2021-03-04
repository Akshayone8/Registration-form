let regForm = document.getElementById('formId');

let regEmail = document.getElementById('regemail');
let regName = document.getElementById('regname');
let regAge = document.getElementById('regage');
let gender = document.getElementsByName('gender');
let regAddress = document.getElementById('regaddress');
let local = document.getElementsByName('locals');
let educate = document.getElementsByName('educate');
let regMobile = document.getElementById('regmobile');
let skills = document.getElementsByName('skills');
let imgFile = document.getElementById('imgFile');
let pdfFile = document.getElementById('pdfFile');
let regLink = document.getElementById('reglink');
let regAns = document.getElementById('regans');
let select = document.getElementById('selectbox');
let selectOnes = document.getElementsByName('selectOne');
let btnValue = document.getElementById('btns');




regForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  Validate();

})

// btnValue.addEventListener('click',function(){

// })



function Validate(){
  // getting values from input 
  let regEmailValue = regEmail.value.trim();
  let regNameValue = regName.value.trim();
  let regAgeValue = regAge.value.trim();
  let regAddressValue = regAddress.value.trim();
  let regMobileValue = regMobile.value.trim();
  let imgFileValue = imgFile.value;
  let pdfFileValue = pdfFile.value;
  let regLinkValue = regLink.value.trim();
  let regAnsValue = regAns.value.trim();
  
let flag = 0;


  // email validation 
  if(regEmailValue === ''){
    setErrorFor(regEmail,'Email cannot be blank');
    flag++;
  }
  else if(!isEmail(regEmailValue))
  {
    setErrorFor(regEmail,'Enter a valid email');
    flag++;
  }
  else{
    setSuccessFor(regEmail);
  }

  // name validation
  if(regNameValue === ''){
    setErrorFor(regName,'Name cannot be blank');
    flag++;
  }
  // else if(regNameValue.length>=3)
  // {
  //   setSuccessFor(regName);
  // }
  // else{
  //   setErrorFor(regName,'Minimum 3 character required');
  // }
  else if(!isName(regNameValue))
  {
    setErrorFor(regName,'Enter a valid Name');
    flag++;
  }
  else{
    setSuccessFor(regName);
  }
  

  //age validation 
  if(regAgeValue === ''){
    setErrorFor(regAge,'Age cannot be blank');
    flag++;
  }
  else if(regAgeValue >= 1 && regAgeValue <= 99){
    setSuccessFor(regAge);
  }
  else {
    setErrorFor(regAge,'Enter Proper Age between 1-99');
    flag++;
  }

  // gender Validation
  for(i=0;i<gender.length;i++){
      if(gender[i].checked===true){
        setGender('hidden');
        // return true;
        break;
      }else{
        setGender('visible');
      }
  }

  //Permanent Address Validation
  if(regAddressValue === ''){
    setErrorFor(regAddress,'Address cannot be blank');
    flag++;

  }
  else if(regAddressValue.length>=10)
  {
    setSuccessFor(regAddress);

  }else{
    setErrorFor(regAddress,'Minimum 10 character required');
    flag++;
  
  }

  // Address rechecking 

  for(z=0;z<selectOnes.length;z++){
    if(selectOnes[z].checked===true){
      if(selectOnes[z].id==='yes'){
        let regcaddressSet = document.getElementById('regcaddress');
        regcaddressSet.value=regAddressValue;
        setSuccessFor(regcaddress);
      }
      else{
        document.getElementById('regcaddress').disabled=false;
        setErrorFor(regcaddress,'Minimum 10 character required');
        flag++;
      }
      setselectOne('hidden');
      break;
    }else{
      setselectOne('visible');
    }

  }

  //Location Validation
  for(j=0;j<local.length;j++){
    if(local[j].checked===true){
        setCheck('hidden');
      // return true;
      break;
    }else{
        setCheck('visible');
    }

  }

  //Education Validation 
  for(j=0;j<educate.length;j++){
    if(educate[j].checked===true){
      if(educate[j].id==='edu'){
        let regedu = document.getElementById('regedu');
          regedu.disabled=false;
        let regEduvalue = regedu.value.trim();
          if(regEduvalue === ''){
            setErrorFor(regedu,'Others field cannot be blank');
            flag++;
          }else if(regEduvalue.length>=2){
            setSuccessFor(regedu);
          }else{
            setErrorFor(regedu,'Enter a valid name');
            flag++;
          }
      }
        setEdu('hidden');
      // return true;
      break;
    }else{
        setEdu('visible');
    }

  }

  // Mobile validation
  if(regMobileValue === ''){
    setErrorFor(regMobile,'Mobile cannot be blank');
    flag++;
  }
  else if(!isMobile(regMobileValue))
  {
    setErrorFor(regMobile,'Enter a valid mobile number');
    flag++;
  }
  else{
    setSuccessFor(regMobile);
  }

  //skill validation
  for(j=0;j<skills.length;j++){
    if(skills[j].checked===true){
      if(skills[j].id==='skill'){
        let regskill = document.getElementById('regskill');
        regskill.disabled=false;
        let regSkillValue = regskill.value.trim();
          if(regSkillValue === ''){
            setErrorFor(regskill,'Skills field cannot be blank');
            flag++;
          }else if(regSkillValue.length>=3){
            setSuccessFor(regskill);
          }else{
            setErrorFor(regskill,'Enter a valid skill');
            flag++;
          }
      }
        setSkill('hidden');
      break;
    }else{
        setSkill('visible');
    }

  }

  // picture validation
  if( imgFileValue != ''){
    setSuccessFor(imgFile);
  }else{
    setErrorFor(imgFile,'Picture cannot be blank');
    flag++;
  }

  // Resume validation
  if( pdfFileValue != ''){
    setSuccessFor(pdfFile);
  }else{
    setErrorFor(pdfFile,'File cannot be blank');
    flag++;
  }

  // Language validation 
  if(select.value==='kannada'||select.value==='hindi'||select.value==='telgu'||select.value==='english'){
    setLang('hidden');
  }else{
    console.log(select.value);
    setLang('visible');
  }

  // Linked validation
  if(regLinkValue === ''){
    setErrorFor(regLink,'Linkedin cannot be blank');
    flag++;
  }
  else{
    setSuccessFor(regLink);
  }

  // answer validation 
  if(regAnsValue === ''){
    setErrorFor(regAns,'Answer cannot be blank');
    flag++;
  }
  else if(regAnsValue.length>=10)
  {
    setSuccessFor(regAns);

  }
  else{
    setErrorFor(regAns,'Write about yourself minimum 10 words ');
    flag++;
  }
if(flag===0){
  alert('Successfully registred');
  location.reload();
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
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  



  // ^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$
  // /^[a-zA-z]{3,15}@[a-z]{4,6}\.[a-z]{3,4}([.a-z]{2,3})?$/
}
//----------------------------- email validation using regX-------------------------- //

function isName(nameN){
  return /^[A-Z a-z _-]{3,15}$/.test(nameN);
}
function isMobile(mobileN){
  return /^[6-9]\d{9}$/.test(mobileN);
}

function setGender(input){
  let radios=document.getElementById('genderSmall');
  radios.style.visibility=input;
}

function setselectOne(input){
  let selectOneSmalls = document.getElementById('selectOneSmall');
  selectOneSmalls.style.visibility=input;
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
  ski.style.visibility = input ;
}

function setLang(input){
  let lang = document.getElementById('langSmall');
  lang.style.visibility = input;
}

