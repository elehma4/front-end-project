let wholePage = document.querySelector('.whole-page');
let connectBtn = document.querySelector('.connectBtn');
let connectPopUp = document.createElement('div');
connectPopUp.setAttribute('class','connectPopUp');
let addButtons = () => {

    
    

    let createAccountBtn = document.createElement('button');

}

connectBtn.addEventListener('click', (e) => {

    //adding login box
    let loginBox = document.createElement('div');
    loginBox.setAttribute('class', 'loginBox');
    let userName = document.createElement('input');
    userName.setAttribute('type', 'text');
    userName.setAttribute('class', 'userName');
    userName.innerText = "username";
    let password = document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('class', 'password');
    let submit = document.createElement('button');
    submit.setAttribute('class', 'submit');
    submit.innerText = "Sumbit";
    loginBox.append(userName);
    loginBox.append(password);
    loginBox.append(submit);
    connectPopUp.append(loginBox);
    wholePage.append(connectPopUp);
    
    console.log(e);
})