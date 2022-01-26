const btn=document.getElementsByClassName("btn btn-primary");
const result=document.getElementsByClassName("data");

const url="https://api.github.com/users/praveenkl3043";

btn[0].addEventListener("click",async function (){


    result[0].innerHTML="loading...";
     try{
         let res= await fetch(url);
         let objet=await res.json();
         console.log(objet)
         result[0].innerHTML=`
         <h6 class="login">Login:<span>${objet.login}<span></h6>
         <h6 class="id">id:<span>${objet.id}</span></h6>
         <h6 class="repo">public repos:<span>${objet.public_repos}</span></h6>
         <h6 class="githubprofile">Githubprofile:<span>${objet.html_url}</span></h6>
         
         `
     }catch (error){
         console.log(error);
         
     }
 });