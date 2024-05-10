let arr= [2,3,5,7,7,6,4,5, 5,12,11,9,9]

for(let i=0; i<arr.length; i++)
    {
        if(arr[i]!=arr[i+1])
            {
                arr[i]= arr[i]*2;
            }
        
        else{
            arr[i]=arr[i]*2;
            i++;
        }

    }

console.log(arr);
