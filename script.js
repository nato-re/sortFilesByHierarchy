const submitButton = document.getElementById('submit')
let verifyInput;
var fileList;
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
  console.log(fileList.map(e => e.name)) // AQUIAQUI AQUI. ESSA VARIÁVEL
  return fileList
  
}, false);
function myFunction() // olha essa função 
  {
    if (!fileList) // caso seja 0 ele volta e não da erro, remove e vê o q rola.
    {      
   // Return from the function.
   // Or handle it in a wiser manner than me.
   return;
    }
    var xoxo = fileList.length;
    document.getElementById("artigos").innerHTML = xoxo;
  }