(()=>{var nameInput,idInput, page1Class, page2Class, page3Class,page4Class, namePass, idpass;
// "input warning massage selectors
nameInput = document.querySelector('#NameWarn');
idInput = document.querySelector('#idWarn');

// Page class Selectors
page1Class = document.querySelector('.page1');
page2Class = document.querySelector('.page2');
page3Class = document.querySelector('.page3');
page4Class = document.querySelector('.page4');

var activePage2 = ()=> {
    var namePass= false, idpass =false;
    var username = document.querySelector('.page1__nameInput').value;
    var userId = document.querySelector('.page1__idInput').value;

    if(username.length<=4) {
        nameInput.style.visibility = 'visible';
        namePass = false;
    }else {
        namePass = true;
        nameInput.style.visibility = 'hidden';
    }
    if(userId.length !== 11) {
        idInput.style.visibility = 'visible';
        idpass = false;
    }else {
        idpass = true;
        idInput.style.visibility = 'hidden';
    }
    if(namePass && idpass) {
        page1Class.style.visibility = 'hidden';
        page2Class.style.visibility = 'visible';
        document.querySelector('.page2__user-name').innerHTML = username;
        nameInput.style.visibility = 'hidden';
        idInput.style.visibility = 'hidden';
    }
}
if(activePage2.username!== '')
document.querySelector(".page1__submit").addEventListener("click", activePage2 );

var activePage3 = ()=> {
    page2Class.style.visibility = 'hidden';
    page3Class.style.visibility = 'visible';
}
document.querySelector(".page2__submit").addEventListener("click", activePage3 );

var activePage1 = ()=> {
    page3Class.style.visibility = 'hidden';
    page1Class.style.visibility = 'visible';
    document.querySelector('.page1__nameInput').value = null;
    document.querySelector('.page1__idInput').value = null;
}
document.querySelector(".page3__btn__no").addEventListener("click", activePage1 );

var activePage4 = ()=> {
    page3Class.style.visibility = 'hidden';
    page4Class.style.visibility = 'visible';
}
document.querySelector(".page3__btn__yes").addEventListener("click", activePage4 );
})();