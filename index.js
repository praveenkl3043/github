const blush = document.getElementById("blush")
const result =document.getElementById("result")

const url="http://makeup-api.herokuapp.com/api/v1/products.json";

almay.addEventListener("click",async function() {
    try{
        let res  = await fetch(url);
        let data= await res.json();
       result.innerHTML=`
       ${data[0].name}
       `
       
           
       }
       catch (error){
        console.log(error);
    }
})


