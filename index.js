
function calculateEMI(){
    var bankS = document.getElementById("bank");
    var modelS = document.getElementById("model");
    var model = modelS.value;

    var DP = parseInt(document.getElementById("downpayment").value)
    var tenureM = parseInt(document.getElementById("tenure").value)
    var vehiclePrice=0

    

    if (model=="Dlx"){
      vehiclePrice=273965
    }
    if(model=="Dura"){
      vehiclePrice=281935
    }
    if(model=="Dlx Leader"){
        vehiclePrice=288165
      }

    if (model=="EVMax"){
        vehiclePrice=366816
      }  
    if (model=="KargoC"){
        vehiclePrice=315498
      }  
    if (model=="KargoE"){
        vehiclePrice=428377
      } 
    
 


    LA=(vehiclePrice-DP+12000)
    var intrt=25
    if (DP>(0.25*vehiclePrice)){
      intrt=22
    }
    console.log(LA)
    console.log(vehiclePrice)  
        
     
    
    vehiclePrice=vehiclePrice
    
    
    
    intpm=intrt/12/100
    exp=(1+intpm)**tenureM
    numerator=LA*intpm*exp
    denom=exp-1
    installments=Math.round(numerator/denom)
    totVehPrice=(installments*tenureM)+DP
    totInterest=totVehPrice-vehiclePrice
  

    document.getElementById("vehprice").innerText= vehiclePrice
    document.getElementById("installments").innerText= installments
    document.getElementById("price").innerText= totVehPrice
    document.getElementById("interest").innerText= totInterest
    console.log(intpm)
    console.log(tenureM)
    console.log(exp)
    console.log(numerator)
    console.log(denom)
  

}



