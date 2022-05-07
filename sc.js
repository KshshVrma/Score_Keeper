const var1=document.querySelector("#first_one");
const var2=document.querySelector("#second_one");
const oned=document.querySelector("#dis1");
const twod=document.querySelector("#dis2");
const threed=document.querySelector("#third_one");
const fourd=document.querySelector("#fourth_one");

let temp1=0;
let temp2=0;

let max=3;
var1.addEventListener('click',function(){
    if(temp1<max&&temp2<max){
        temp1+=1;
        oned.textContent=temp1;
        if(temp1==max){
            oned.classList.add('winner');
            twod.classList.add('loser');
        }
    }
   

})
var2.addEventListener('click',function(){
    if(temp2<max&&temp1<max){
    temp2+=1;
    twod.textContent=temp2;
    if(temp2==max){
        twod.classList.add('winner');
        oned.classList.add('loser');

    }
}
    
    

})

threed.addEventListener('click',function(){
    if(temp1==max){
        twod.classList.remove('loser')
        oned.classList.remove('winner')
    }
    if(temp2==max){
        twod.classList.remove('winner')
        oned.classList.remove('loser')
    }
  

   twod.textContent=0;
   oned.textContent=0;
   temp1=0;
   temp2=0;
})
fourd.addEventListener('change',function(){
    twod.textContent=0;
   oned.textContent=0;
   temp1=0;
   temp2=0;
   max=parseInt(this.value);
})