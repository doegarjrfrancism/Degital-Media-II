const profilephoto=document.getElementByld('Profile-Photo');
const PhotoModal=document.getElementById('ProfilePhoto');
const closebtn=document.querySelector('.close-btn');

profilephoto.onclick=function()
{
PhotoModal.style.display='block';
}
closebtn.onclick=function()
{
    PhotoModal.style,display='None';
}
const contactForm=documentgetElementById('contactFrom');
const confirmModal=documentgetElementById('comfrimModal');
const confirm=documentgetElementById('confirmBtn');
const closeconfirmMOdal=('CloseComfirmModal');

contactForm.onsubmit=function(event) {
    event.preventDefault();
    confirmModal.style.display='block';
}
confirmBtn.onclick=function(){
    confirmModal.style.display='none';
}
window.onclick=function(event){
    if (event.target=PhotoModal={evettargetconfirmModal}){
        PhotoModal.style.display='none';
        confirmModal.style.display='none';
    }
}
