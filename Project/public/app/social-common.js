$(()=>{
    $('#navbar').load('./components/navbar.html')
    $('#footer').load('./components/footer.html')
    loginIfNeeded()

})
function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    console.log(currentUser)
    if(!currentUser){
        $.post('/api/users', {}, (user)=>{
            window.localStorage.user = JSON.stringify(user)
        })
    }
}
