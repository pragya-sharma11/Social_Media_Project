$(()=>{
    $('#navbar').load('./components/navbar.html',loginIfNeeded) //callback function is available at load().
    //first loading of component done then only loginIfNeeded will execute.
    $('#footer').load('./components/footer.html')
    $('#content').load('./components/all-articles.html',)
  })
function loginIfNeeded(){
  let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
  if (!currentUser) {
    $.post('/api/users', {}, (user) => {
      if (user) {
        console.log('registered current user as ', user.username)
        window.localStorage.user = JSON.stringify(user)
        currentUser = user
        $('#nav-username').text(currentUser.username)
      }
    })
  } else {
    console.log('resuming session as ', currentUser.username)
    console.log($('#nav-username'))
    $('#nav-username').text(currentUser.username)
  }
}

