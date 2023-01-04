
var number
var row

function ticket(number,row){
      if(number%8==1 || number%8==4){
        return "Lower Berth"
      }
      else if(number%8==2 || number%8==5){
        return "Middle Berth"
      }
      else if(number%8==3 || number%8==6){
        return "Upper Berth"
      }
      else if(number%8==7){
        return "Side Lower Berth"
      }
      else if (number%8==0){
        return "Side Upper Berth"
      }
}
console.log("Your seat is: "+  ticket(10,1))