var activePage2 = ()=> {
    document.querySelector('.page1').style.visibility = 'hidden';
    document.querySelector('.page2').style.visibility = 'visible';
    var username = document.querySelector('.page1__nameInput').value;
    document.querySelector('.page2__user-name').innerHTML = username; 
}
if(activePage2.username!== '')
document.querySelector(".page1__submit").addEventListener("click", activePage2 );

var activePage3 = ()=> {
    document.querySelector('.page2').style.visibility = 'hidden';
    document.querySelector('.page3').style.visibility = 'visible';
}
document.querySelector(".page2__submit").addEventListener("click", activePage3 );

var activePage1 = ()=> {
    document.querySelector('.page3').style.visibility = 'hidden';
    document.querySelector('.page1').style.visibility = 'visible';
    document.querySelector('.page1__nameInput').value = '';
}
document.querySelector(".page3__btn__no").addEventListener("click", activePage1 );

var page3TestCl = ()=> {
    document.querySelector('.page3').style.visibility = 'hidden';
}
document.querySelector(".page3__btn__yes").addEventListener("click", page3TestCl );