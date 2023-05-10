const btn = document.querySelector('.formBtn');
btn.addEventListener('click', Submit)

async function Submit(){
   let res= await fetch('http://localhost:3000/people',{
        method:"POST",
        
    }).then(async(data)=>{
        if(data.ok){
            data = await data.json()
        }
    }).catch(e=>console.log("error"))
    
  alert("dobavili")
  
}
