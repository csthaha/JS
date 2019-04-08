console.log("二分法查找");

//函数表达式
const Array=[2,4,3,4,8,7,4,0,3,8];
const search = (array,num) => {
    let low = 0,
        high = 10;
        while(low <= high){
            let mid = (low + high)/2;
             let guess = array[mid];
            if(guess == num)
               {
                    return mid;
               }
            else if(guess > num)
               {
                   high = mid - 1;
               }
            else{
                low = mid + 1 ;
            }
            

        }
}
console.log(search(Array,2));