    function randomColor() {
    
    var rgb = 'rgb(0, 0, 0)';
    
    
    rgb = rgb.substring(4, rgb.length - 1)
             .replace(/ /g, '')
             .split(',');
    
    
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    
   
    rgb[0] = red;
    rgb[1] = green;
    rgb[2] = blue;
    
   
    rgb = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
    
    
    document.querySelector(".color").style.backgroundColor = rgb;
    document.querySelector(".value").innerText = rgb;
    document.querySelector("#changeColor").style.backgroundColor = rgb;
}
