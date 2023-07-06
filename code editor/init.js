function run(){
    let htmlCode = document.getElementById("htmlCode").value;
    let cssCode = document.getElementById("cssCode").value;
    let jsCode = document.getElementById("jsCode").value;
    let outPut = document.getElementById("outPut");

    outPut.contentDocument.body.innerHTML = htmlCode+"<style>"+cssCode+"</style>";
    outPut.contentWindow.eval(jsCode);    
}