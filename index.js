const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries;
// Code your solution here
function reducer(preValue,currValue){
    
    function batteries(){
    totalBatteries = preValue+currValue;
      
     return totalBatteries;
}
return batteries();
}
//console.log(reducer())

console.log(batteryBatches.reduce(reducer));