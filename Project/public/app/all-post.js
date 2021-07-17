function loadPosts(){
    $.get('/api/posts',(posts)=>{
      console.log(posts)
      for(let p of posts){
        console.log(p);//---for testing purpose.
        $('#posts-container').append(
          $(`<div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                    <p class="card-text">${p.body}</p>
                    <a href="#" class="card-link">read more</a>
                    <a href="#" class="card-link">like</a>
                  </div>
                </div>
                `)
              )
      }
    })
  }
  