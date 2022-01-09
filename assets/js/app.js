



function indexMass(){
    let sum = 0;

    let mass = +massInput.value;
    
    let heigt = +heigtInput.value;
   
        if(heigt < 3) {
         sum = mass / heigt **2;
     } else {
        heigt = +heigtInput.value / 100;
        sum = mass / heigt **2;
     }


    sum = Math.round(sum * 100) /100;
    console.log(sum);
    result.innerHTML = sum;

    
}


