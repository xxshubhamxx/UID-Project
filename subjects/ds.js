// const e1=document.getElementById("meaning");
// const e2=document.getElementById("usage");
// const e3=document.getElementById("implementation");
// const e4=document.getElementById("none");
function clicked1(){
    document.getElementById("meaning").classList.remove("none");
    document.getElementById("mh").classList.add("animate__backInLeft");
    document.getElementById("md").classList.add("animate__backInRight");
    document.getElementById("usage").classList.add("none");
    document.getElementById("implementation").classList.add("none");
    document.getElementById("examples").classList.add("none");
}
function clicked2(){
    document.getElementById("usage").classList.remove("none");
    document.getElementById("uh").classList.add("animate__backInLeft");
    document.getElementById("ud").classList.add("animate__backInRight");
    document.getElementById("meaning").classList.add("none");
    document.getElementById("implementation").classList.add("none");
    document.getElementById("examples").classList.add("none");
}
function clicked3(){
    document.getElementById("implementation").classList.remove("none");
    document.getElementById("ih").classList.add("animate__backInLeft");
    document.getElementById("id").classList.add("animate__backInRight");
    document.getElementById("meaning").classList.add("none");
    document.getElementById("usage").classList.add("none");
    document.getElementById("examples").classList.add("none");
}
function clicked4(){
    document.getElementById("examples").classList.remove("none");
    document.getElementById("eh").classList.add("animate__backInLeft");
    document.getElementById("ed").classList.add("animate__backInRight");
    document.getElementById("meaning").classList.add("none");
    document.getElementById("usage").classList.add("none");
    document.getElementById("implementation").classList.add("none");
}
