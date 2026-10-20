const optionsModal=document.querySelector('#mission-options');
document.querySelector('.mission-info-button').addEventListener('click',()=>optionsModal.showModal());
optionsModal.querySelectorAll('.options-close,.options-confirm').forEach(button=>button.addEventListener('click',()=>optionsModal.close()));
optionsModal.addEventListener('click',event=>{if(event.target!==optionsModal)return;const bounds=optionsModal.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)optionsModal.close()});
