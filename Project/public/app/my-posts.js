function loadMyPosts(){
    $.get('/api/posts',(posts)=>{
        for(let p of posts){
            let uId = JSON.parse(window.localStorage.user).id
            //testing code is commented on.
            //console.log(uId)
            //console.log("==="+p.user.id)--->we call the column data of user by users column name not by posts table column name.
            if(p.user.id == uId){
                //console.log("Log")
                $('#posts-container').append(
                    $(`
                    <div class="col-4">
                      <div class="card m-2" style="box-shadow:#e26a68  1px 1px 2px 1px">
                        <div class="card-body">
                          <h5 class="card-title">${p.title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                          <p class="card-text">
                            ${p.body.substr(0, 200)}
                            <a href="#">...read more</a>
                          </p>
                          <a href="#" class="card-link">Comment</a>
                          <a href="#" class="card-link">Like</a>
                        </div>
                      </div>
                    </div>
                    `)
                  )
            }
        }
    })
}