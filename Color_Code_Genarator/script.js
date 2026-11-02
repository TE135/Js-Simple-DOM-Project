function Genaret_rgb_color() {
    var r= Math.floor(Math.random() *255);
    var g= Math.floor(Math.random() *255);
    var b= Math.floor(Math.random() *255);

    return `rgb(${r},${g},${b})`;
};
function update_color() {
    var color= Genaret_rgb_color();
    var color_box= document.getElementById("color_box").style.backgroundColor=color;
    var color_code = document.getElementById("color_code").innerHTML=color;
};
document.getElementById("btn").addEventListener("click",function() {
    var color_code = document.getElementById("color_code");
    var input = document.createElement("input");
    document.body.appendChild(input);
    input.value=color_code.innerHTML;

    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    
    alert("Color Copyed To Clickbord")
});
function btn() {
    update_color();
}
