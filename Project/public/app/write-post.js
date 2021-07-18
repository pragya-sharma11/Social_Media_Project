$(()=>{
    $('#write-btn').click(()=>{
        const userId = JSON.parse(window.localStorage.user).id
        const title = $('#p-title').val()
        const body = $('#p-body').val()
         $.post('/api/posts', {userId, title, body})
            $('#content').load('/components/all-posts.html')
            $('.nav-item active').removeClass('active')
            $("[data-components = all-posts.html]").addClass('active')
         
    })
})