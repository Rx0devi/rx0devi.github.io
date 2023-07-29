const SpinnerWrapperE1=document.querySelector('.spinner-wrapper');
window.addEventListener('load',()=>
{
    SpinnerWrapperE1.computedStyleMap.opacity='0';

    setTimeout(()=>{
    SpinnerWrapperE1.computedStyleMap.display='none';
},0.2s);
});


