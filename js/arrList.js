// reference website https://www.sitepoint.com/community/t/issue-with-adding-a-link-to-javascript-array/37174/4

//initilized my projects and continue to add projects 
var proj1 = "https://jtapia21.github.io/it202spr2018/projects/p2/index.html"; //School Search
var proj2 = "https://jtapia21.github.io/it202spr2018/labs/lab1/index.html";  //Band tour website
var proj3 = "https://jtapia21.github.io/it202spr2018/homework/hw8.html"; //Weather app

//An array for titles
var myTitle = ["Chicago Schools", "Band website", "The Weather App"];
myTitle.toString();

//An array to hold the links and print them to the website 
var linkArray = [proj1, proj2, proj3]; 
var linkTarget = document.getElementById("linkTarget");
var arrLen = linkArray.length;


//A for loop that loops and prints out the websites in titles form
for (var i = 0; i < arrLen; i++) {
    linkTarget.innerHTML += '<a href="' + linkArray[i] + '"> ' + myTitle[i] + '</a>' + '<br>';
    
    if(linkArray[i] == proj1) {
    
        linkTarget.innerHTML += '<p>Search type of school for you and your child in the Chicago area.</p>';
    }
    if(linkArray[i] == proj2) {
    
        linkTarget.innerHTML += '<p>A website templete for bands going on tour.</p>';
    }
    if(linkArray[i] == proj3) {
    
        linkTarget.innerHTML += '<p>Getting Chicagos weather.</p>';
    }
}//End of for loop
