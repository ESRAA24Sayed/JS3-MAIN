var siteName=document.getElementById("siteName")
var siteUrl=document.getElementById("siteUrl")

var siteList=[];

if(localStorage.getItem("sites") != null){

    siteList=JSON.parse(localStorage.getItem("sites"));

      displaysite()
}



function addsite(){
   if(validationName()==true && validationUrl()==true ){
    var site={
        name:siteName.value,
        url:siteUrl.value

     
    }

    siteList.push(site)
    localStorage.setItem("sites" , JSON.stringify(siteList))
    clearsite()
    displaysite()
   }

   else{
  
        var myModal = new bootstrap.Modal(document.getElementById("myModal"));
        myModal.show();
      };
   }
   

     


function clearsite(){
    siteName.value="";
    siteUrl.value=""
}

function displaysite(){

    var cartona="";
    for(i=0 ; i <siteList.length ; i++){
        cartona+=`    <tr>
        <td> ${i}</td>
        <td>${siteList[i].name}</td>
        <td><a onclick="visitesite()" href="${siteList[i].url}" class="btn btn-dark">Visit</a></td>
        <td><button onclick="deletesite(${i})" class="btn btn-dark">Delete</button></td>
        </tr>`
    }

    document.getElementById("tableBody").innerHTML=cartona;

}

function deletesite(indexitem){
  siteList.splice(indexitem , 1)
  localStorage.setItem("sites" , JSON.stringify(siteList))
  displaysite()
}

function visitesite(){
   siteList.push(siteList[i].url)
}


function validationName(){
    var text=siteName.value;
    var regexName=/^([A-Z]|[a-z]){3,}$/

    if( regexName.test(text) ){
         siteName.classList.add("is-valid");
         siteName.classList.remove("is-invalid");

         

         return true;
    }
    else{
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");

      

        return false;
    }
}



function validationUrl(){
    var text=siteUrl.value;
    var regexUrl=/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/

    if(regexUrl.test(text)){
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");

        

        return true;
   }
   else{
       siteUrl.classList.add("is-invalid");
       siteUrl.classList.remove("is-valid");

      

       return false;
   }
}
