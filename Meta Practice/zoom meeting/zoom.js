function streamVideo(){
    const video=document.querySelector('video')
    const option={video:true}
    navigator.mediaDevices.getUserMedia(option)
    .then(stream=>video.srcObject=stream)
    .catch(err=>console.log(err))
}