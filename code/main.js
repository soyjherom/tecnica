function showMenu(){
    const menuBar = document.querySelector('.menu');
    const menuIsActive = document.querySelector('.is-active');
    
    console.log(menuIsActive);
    if(menuIsActive == null){
        menuBar.classList.add('is-active');
    } else {
        menuBar.classList.remove('is-active');
    }
}
