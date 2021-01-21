



//1.kilometerTometer
function kilometerTometer(n){
    //We know that 1 kilometer = 1000 meter
     var meter = n*1000;
         return meter;
}

var result = kilometerTometer(5);
console.log(result);



//budgetCalculator


function budgetCalculator(w,m,l){



    var watch = 50;
    var mobile = 100;
    var laptop = 500;
    
    var watchSum = w*watch;
    var mobileSum = m*mobile;
    var laptopSum = l*laptop;
    var final = watchSum+mobileSum+laptopSum;
    return final;
    
    
    
    
    }
        var result = budgetcalculater(3,7,1);
       
          console.log(result);
     

// hotelCost

function hotelCost(n){


    
    
    if(n <=10){
      var cost = n*100;
}
    

    else if (n<=20){
        var second=n*80-800;
        var cost = 1000+second;
    }

    else{
        var third =n*50-1000;
        var cost = 1800+third;
    }
    
    
       return cost;
  }
  
  var result = hotelCost(22);
  console.log(result);
    

  // megaFriend

  