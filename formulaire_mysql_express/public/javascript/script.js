 let modif= document.querySelector('.modification')
 let edit= document.querySelector('#edit')
let contener=document.querySelector('.contener')
let input= document.querySelector('#input')
console.log(input)
 let connexion1=document.querySelector('.connexion1')
 edit.addEventListener('click',(e)=>{
    console.log(e.target)
       modif.style.display='block';
       connexion1.style.display='none';
       contener.style.overflow='hidden';
      input.style.display='none'
      try{
        input.value=e.target.parentElement.parentElement.id
      } catch{
        input.value=e.target.parentElement.id
      }
      console.log(input.value)

 })
