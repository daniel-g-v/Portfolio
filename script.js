let p1 = document.getElementById("project-1");

function increaseImageSize () {
    p1.style.width = '400px';
    p1.style.height = '400px';
    p1.style.boxShadow = 'rgb(38, 57, 77) 0px 20px 30px -10px';
}

p1.addEventListener("mouseover", increaseImageSize);
p1.addEventListener("mouseout", function () {
    p1.style = ""
});