$(()=>{
    $('#navbar').load('./components/navbar.html',loginIfNeeded) //callback function is available at load().
    $('#footer').load('./components/footer.html')
    

})
function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    console.log(currentUser)
    if(!currentUser){
        $.post('/api/users', {}, (user)=>{
            if(user) {
                console.log("Logged in as " + user.username)
                window.localStorage.user = JSON.stringify(user)
                console.log('nav-username')  //it is possible that before loading nav-bar and footer, our username get activated so we need to make our code top to bottom but not at one time, but line by line and one after another.
                //so we will try some kind of call back function in jquery.
                $('#nav-username').text(user.username)
            }
        })
    } else {
        console.log('resuming session as '+ currentUser.username)
        console.log('nav-username')
        $('#nav-username').text(currentUser.username)
    }
}
