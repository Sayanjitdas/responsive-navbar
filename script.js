let linkFrame = document.getElementById('links-frame');
let breadcrumb = document.getElementById('breadcrumb');

function checkScreenWidth(){
    if(screen.width < 1000){
        linkFrame.style.display = 'none';
        linkFrame.classList.replace('links-frame','dropdown-frame');
        linkFrame.classList.add('slide-out-top');
        breadcrumb.removeAttribute('style');
    }else{
        linkFrame.classList.replace('dropdown-frame','links-frame');
        linkFrame.classList.remove('slide-out-top');
        breadcrumb.style.display = 'none';
        linkFrame.removeAttribute('style');

    }
}

breadcrumb.addEventListener('click',function(){
    linkFrame.removeAttribute('style');
    linkFrame.classList.toggle('slide-in-top');
    linkFrame.classList.toggle('slide-out-top');
})


window.addEventListener('resize',checkScreenWidth);

checkScreenWidth();