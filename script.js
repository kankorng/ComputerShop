function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update active menu
    const menus = document.querySelectorAll('.menu li');
    menus.forEach(menu => menu.classList.remove('active'));

    event.target.classList.add('active');
}
let users =[
    {userName:'kankorng',password:'1'},
    {userName:'thavrasann',password:'2'},
    {userName:'vinsatry',password:'3'},
    {userName:'ngetti',password:'4'},
    {userName:'keomliheng',password:'5'}
]
function login() {
    let user = document.getElementById('userName');
    let password = document.getElementById('password_login');
    let userLogin = document.getElementById('userLogin');
    let checkLogin = false;
    for (let i = 0; i < users.length; i++) {
        if (user.value === users[i].userName && password.value === users[i].password) {
            checkLogin = true
            userLogin.innerText = users[i].userName;
            user.value=''
            password.value=''
            // hide login form
            document.getElementById("loginForm").classList.add("hidden");
            // show next content
            document.getElementById("nextContent").classList.remove("hidden");
            break;
        }
    }
    if(checkLogin === false){
        alert("user and password is incorrect.");
    }
}
function logout() {
    document.getElementById('userLogin').innerText=''
    // show login form
    document.getElementById("loginForm").classList.remove("hidden");
    // hide next content
    document.getElementById("nextContent").classList.add("hidden");
}
