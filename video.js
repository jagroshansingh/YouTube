const takeout=()=>{
    let ls=localStorage.getItem('storeit')
    let {videoId}=JSON.parse(ls)
    console.log(videoId)
    
    let iframe=document.createElement('iframe')
    iframe.src=`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&videoEmbeddable=true`
    iframe.width="560"
    iframe.height="315"
    iframe.setAttribute('allowfullscreen',true)
    let player=document.getElementById("player")
    player.append(iframe)
}

/* <iframe width="560" height="315" src="https://www.youtube.com/embed/iKAVfMH2aFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */