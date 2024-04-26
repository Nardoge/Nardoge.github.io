var posts=["2024/04/23/人生就是要不断开始/","2024/04/26/雨天总是挂念从前/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };