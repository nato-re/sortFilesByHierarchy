const submitButton = document.getElementById('submit')
let verifyInput;
let fileList;
let fileList2;


submitButton.addEventListener('click', () => {
  //verifyInput()
  //listFilesInFolder
})


document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  let files = event.target.files;
  fileList = Object.values(files);
  console.log(Object.values(files));

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
  console.log(fileList.map(e => e.name)) // AQUIAQUI AQUI. ESSA VARIÁVEL
  return fileList
  
}, false);

document.getElementById("filepicker2").addEventListener("change", function(event) {
  let output = document.getElementById("listing2");
  let files = event.target.files;
  fileList2 = Object.values(files);
  console.log(Object.values(files));

  for (let i=0; i<files.length; i++) {
    let item = document.createElement("li");
    item.innerHTML = files[i].webkitRelativePath;
    output.appendChild(item);
  };
  console.log(fileList2.map(e => e.name)) // AQUIAQUI AQUI. ESSA VARIÁVEL
  return fileList2
  
}, false);

function myFunction() // olha essa função
{

  if (!fileList2) // caso seja 0 ele volta e não da erro, remove e vê o q rola.
  {      
 // Return from the function.
 // Or handle it in a wiser manner than me.
 return;
  }
 {
  let b;
  b = fileList2.length;
  let c;
  for (let a=0; a<fileList.length; a++) // Ajuda aqui!!!
    {
       var filename = fileList[a].name;
       c = 0;  
        while (c < b)
        {     
           var patt = new RegExp(fileList2[c].name); 
           var res = patt.test(filename);
           c+=1;
           if (res==true)
          {
            document.getElementById("artigos").innerHTML=filename;
          }
        }
    }
  }
}