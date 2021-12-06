function openTextFile() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "text/plain"; // 확장자가 xxx, yyy 일때, ".xxx, .yyy"
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
    input.click();
}

function processFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
        document.getElementById("output").innerText = reader.result;
    };
    reader.readAsText(file, /* optional */ "euc-kr");
}

function writeFile(_str) {
    var file;
    var data = [];
    data.push(_str);
    
    var sFileName = "sig.js";
    
    var properties = {type: 'text/plain'}; // Specify the file's mime-type.
    try {
    // Specify the filename using the File constructor, but ...
    file = new File(data, sFileName, properties);
    } catch (e) {
    // ... fall back to the Blob constructor if that isn't supported.
    file = new Blob(data, properties);
    }
    var url = URL.createObjectURL(file);
    document.getElementById('link').href = url;
}

function saveToFile_Chrome(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });
    objURL = window.URL.createObjectURL(blob);
            
    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;
    var a = document.createElement('a');
    a.download = fileName;
    a.href = objURL;
    a.click();
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }