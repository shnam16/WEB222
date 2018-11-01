// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};

window.onload=function(){
    var video1Element = document.querySelector("#video1");
    var myVideo = "<video controls='" + video.controls + "'" + " width='" + video.width + "'" + " height='" + video.height + "'>";
    
    
    
    for(var i = 0; i < video.source.length; i++){
        myVideo += "<source src='" + video.source[i].src + "' type='" + video.source[i].type + "'>";
    }
    
    myVideo+= "</video>";
    video1Element.innerHTML = myVideo;

};