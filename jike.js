function computermove(){
   let numa= Math.random()
    let computermove1 =''
  
   if (numa <= 1/3){
    computermove1 ='Rock'
   }
   else if(numa>1/3 && numa <=2/3){
    computermove1='Paper'
   }
   else {
    computermove1='Scissors'
   }
   return computermove1;


}

const resol1=document.getElementById('key1')
const resol2=document.getElementById('key2')
const resol3=document.getElementById('key3')
const resol4=document.getElementById('key4')
const resol5=document.getElementById('key5')
const resol6=document.getElementById('key6')


function darkmode(){
   document.body.classList.toggle('darkb')
   resol1.classList.toggle('dark1')
   resol2.classList.toggle('dark1')
   resol3.classList.toggle('dark1')
   resol4.classList.toggle('dark1')
   resol5.classList.toggle('dark1')
   resol6.classList.toggle('dark1')
   
   
}
let h=2;
function txtToggle(){
   if (h%2==0){
      resol6.innerText='Lightmode'
   }
   else{
      resol6.innerText='Darkmode'

   }
   h=h+1
}

    

