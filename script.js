

function checkInput(){
    event.preventDefault();
            let data = document.querySelectorAll(".inputGroup input")
            let checkAGB = document.getElementById("agb")
            sessionStorage.setItem("vorname",data[0].value )
            sessionStorage.setItem("nachname", data[1].value)
    
           
            let wrongData = []

            for(let i = 0; i< data.length; i++){
                if(data[i].value ==""){
                    wrongData.push(data[i])
                }
            }

            if(wrongData.length>0 || !checkAGB.checked){
                if(wrongData.length>0){
                    wrongData.forEach(e=>{e.style.border ="2px solid red"; alert(`Wrong Data Input:${e.name}`)})
                    checkAGB.style.border = "2px solid red"
                    return false
                }else if(!checkAGB.cheked){
                    alert("Please Accept Terms")
                    console.log(data)
                    return false
                }
                
               
                
            }
            
            

            document.getElementById("myForm").submit();
           
    }


    function welcome(){
        let vorname = sessionStorage.getItem("vorname")
        let nachname = sessionStorage.getItem("nachname")

        document.getElementById("welcome_vorname").textContent = vorname.toUpperCase();
        document.getElementById("welcome_nachname").textContent = nachname.toUpperCase();
    }
   

    
 
    welcome();
    
        


