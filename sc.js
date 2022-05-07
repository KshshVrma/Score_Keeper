const var1=document.querySelector("#first_one");
const var2=document.querySelector("#second_one");
const oned=document.querySelector("#dis1");
const twod=document.querySelector("#dis2");
const threed=document.querySelector("#third_one");
let temp1=0;
let temp2=0;

let max=5;
var1.addEventListener('click',function(){
    if(temp1<max&&temp2<max){
        temp1+=1;
        oned.textContent=temp1;
    }

})
var2.addEventListener('click',function(){
    if(temp2<max&&temp1<max){
    temp2+=1;
    twod.textContent=temp2;
}})

threed.addEventListener('click',function(){
   
   twod.textContent=0;
   oned.textContent=0;
   temp1=0;
   temp2=0;
})