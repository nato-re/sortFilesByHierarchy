const submitButton = document.getElementById('submit')
let verifyInput;
submitButton.addEventListener('click', () => {
  //verifyInput()
  //listFilesInFolder
})

document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
}, false);
function myFunction() 
    {
    for (let z=0; z<listing.length; z++)
        var str = listing[z]; 
        var res = str.match("AVD",gi);
        document.write("artigos").innerHTML = res;
    }