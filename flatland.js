function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    c = readLine().split(' ');
    c = c.map(Number);

    //sort  c
    var end = c.length-1
    var swapped = true

    while(swapped == true){
        swapped = false
        for(var idx = 0; idx < c.length - 1; idx ++){
            if(c[idx] > c[idx+1]){
                var temp = c[idx]
                c[idx] = c[idx + 1]
                c[idx+1] = temp
                swapped = true
            }
        }
    }

    var cityIdx = 0
    var counter = 0
    var maxDistance = 0
    while(counter < n && cityIdx < c.length){
        if(counter < c[cityIdx]){
            var forward = c[cityIdx]-counter
            var back = counter - c[cityIdx-1]

            if(forward < back){
               if(forward > maxDistance){
                maxDistance = forward
                }
            }
            else{
               if(back > maxDistance){
                maxDistance = back
                }
            }
            counter ++
        }
        else if (counter == c[cityIdx]){
            counter ++
            cityIdx ++
        }
    }
    if(counter < n){
       if((n-1) - c[cityIdx-1] > maxDistance){
           maxDistance = (n-1) - c[cityIdx-1]
       }
    }

    console.log(maxDistance)


}
