let navlinks = $('.navbar-nav .nav-link')

navlinks.click((ev)=>{
    console.log($(ev.target).attr('data-component'))
})