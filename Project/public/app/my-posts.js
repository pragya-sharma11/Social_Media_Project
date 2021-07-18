$(()=>{
    $.get('/api/posts',(posts)=>{
        for(let p of posts){
            let uId = JSON.parse(window.localStorage.user).id
            
        }
    })
})