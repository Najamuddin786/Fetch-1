     
     let a=0;
function button(){
    fetch('https://reqres.in/api/users')
    .then(res=>res.json())
    .then(data=>{ 
       
      
       let ass=document.getElementById("div");

       
      
      if(a>1){
        ass.innerHTML="";
       
        
      }else if(a==0){
        for(let i=0;i<6;i++){
            
            
        
          
            
            let img=document.createElement("img");
                  img.src=data["data"][i]["avatar"];
            let email=document.createElement("h3");
                  email.innerHTML=data["data"][i]["email"];
            let name=document.createElement("h3");
                  name.innerHTML=`${data["data"][i]["first_name"]} ${data["data"][i]["last_name"]}`;
              ass.appendChild(name)
              ass.appendChild(email)
              ass.appendChild(img)
        
          

      }
      a++

      }
       

     

        

    })
    


}
