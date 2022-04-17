alert("The test extension is up and running")

/*"matches":["<all_urls>"],*/
     
//https://actucameroun.com/
var les_plus_populaires= document.getElementsByClassName("ac-most-popular p-3 p-sm-0");
var la_une= document.getElementsByClassName("une-home mb-3");
var contenu= document.getElementsByClassName("post-content");
var titre =document.getElementsByClassName("page-title");
var author=document.getElementsByClassName("author vcard")

if (typeof browser === "undefined") {
    var browser = chrome;
}
// for (elt of images){
//    elt.src = `${browser.runtime.getURL("pp.jpg")}`
//    elt.alt = 'this image was replaced'
// }
console.log(contenu.length)
var regex = /(<([^>]+)>)/ig;
let result;
let info="";
let entete="";
let autheur=""
try{
  for(var i=0;i<contenu.length;i++){
    info=contenu[i].innerText
  }  
}catch(e){

}

try{
  entete=titre[0].innerText
}catch(e){

}

try{
  autheur=author[0].innerText
}catch(e){

}

let data=entete+" "+autheur+" "+info;
console.log(data)
predict([data])

//ajouter cette ligne dans le maifest pour effectuer la tache sur une tache specifique
/*

 "matches":["*://*.stackoverflow.com/*"],
*/


function predict(inf){
  //let link="https://mlpcfakenewsdetector.herokuapp.com/api/fakedetector"
                let link="http://localhost:3600/predict";
                fetch(link,{    
                    method:"POST",
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                  },
                    body: JSON.stringify(
                      {'text':inf})
                  })
                    .then((response) => {
                      return response.json();    
                    })
                    .then((responseJson) => {
                       alert(JSON.stringify(responseJson["result"][0]))           
                    }).catch((err)=>{
                        
                    })

}
function saveTextAsFile(text)
{
    var textToWrite = text;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
      var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}