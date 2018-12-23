var populationArray=[9000,15000,11000,3000,2500],maxPopulation=11000,isOverPopulated=false;

for (var i = 0; i < populationArray.length; i++) {

            switch(maxPopulation){

    case(populationArray[i]>maxPopulation):
    console.log("larger");
    break;
    
    case(populationArray[i]<maxPopulation):
    console.log("smaller");
    break;
    case(populationArray[i]==maxPopulation):
    console.log("equals");
    break;
 }

}
if((populationArray[populationArray.length-1]<100000&&populationArray[populationArray.length-2]<100000&&populationArray[populationArray.length-3]<100000&&maxPopulation<100000)||isOverPopulated===false)?    console.log("Small cities!!!") : 
console.log("“Large cities!!!");

