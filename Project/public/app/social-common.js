$(() => {
  $('#navbar').load('/components/navbar.html',loginIfNeeded)//callback function is available at load().
  //first loading of component done then only loginIfNeeded will execute.
  //earlier this code was running infinitly coz i attach this script inside navbar.html
  $('#footer').load('../components/footer.html')
  console.log("===========")
  $('#content').load('/components/all-posts.html') // this contains it's own scripts too

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
    console.log(currentUser.id)
    $('#nav-username').text(currentUser.username)
  }
}
})