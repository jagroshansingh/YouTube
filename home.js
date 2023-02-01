const search = async (sort)=>{
    // console.log("hello")
    try{
     
     const api=`AIzaSyBAcLiK-DrycS1nW2q_cFNi97bDr9bxdAI`
     let dash=document.getElementById("search").value
     let see= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${dash}&key=${api}&order=${sort}`)
     //console.log('see: ', see);
     let data=await see.json();
     //console.log('data: ', data);
     let results=data.items;
     //console.log('results: ', results);
     appnd(results)
    }
    catch(err){
     console.log('err: ', err);
 
    }
 
 }
 
 
 
 const appnd=(data)=>{
     let bodi=document.getElementById('bodi')
     bodi.innerHTML=null
     data.forEach(({snippet,id:{videoId}})=>{
         let dv=document.createElement("div")
         let channel=document.createElement('p')
         let title=document.createElement("p")
         let image=document.createElement("img")
 
         image.src=snippet.thumbnails.high.url
         channel=snippet.channelTitle;
         title=snippet.title;
 
         dv.append(image,title,channel)
         dv.onclick=()=>{
             let name=localStorage.getItem('name')||[]
             // if(name=[])
             // {
             //     window.location.href='./auth.html'
             //     alert('please login first...')                   
             // }
 
             let ls={snippet,videoId}
             jsn=JSON.stringify(ls)
             localStorage.setItem('storeit',jsn)
             window.location.href='./video.html'
         }
         bodi.append(dv)
     })
 }