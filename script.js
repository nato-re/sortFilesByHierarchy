const submitButton = document.getElementById('submit')
let verifyInput;
var filelist;
submitButton.addEventListener('click', () => {
  //verifyInput()
  //listFilesInFolder
})

document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;
  let fileList = Object.values(files);
  console.log(Object.values(files));

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
  return filelist
}, false);
console.log(filelist) // AQUIAQUI AQUI. ESSA VARIÁVEL
function myFunction() 
  {
    document.getElementById("artigos").innerHTML = filelist.length;
  }