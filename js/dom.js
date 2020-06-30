// Task 1

// Access HTML element with id tag-line.
let tagline = document.getElementById("tag-line");

// Access all headings that belong to div with the class name bg-main-content.
let h2 = document.querySelectorAll(".bg-main-content h2");

// Create the variable collect and assign it with content of tag-line.
let collect = tagline.innerText;

// Loop through the array of headings and append the content of each heading to variable collect
collect = collect + "\n------------\n";
for( let  col = 0; col <h2.length; col++){
	collect = collect + h2[col].innerText + "\n";
}
// After the loop, use alert to print collect
alert(collect);



// Task 2

// Collect all divs with the class name "box" in node list.
let divs = document.querySelectorAll('.bg-main-content .box');

// Access 13th div with class name box that belongs to div with the class name bg-main-content.

let collect2 = divs[12].querySelector('h2').innerText;

// Create variable collect and assign it with the heading and body-text that belong to the 13th div in order to resemble the screenshot below.
collect2 = collect2 +  "\n------------\n";	

let remainingText =  divs[12].querySelectorAll('p');
for(let coll = 0; coll <remainingText.length; coll++){
	collect2 = collect2 + remainingText[coll].innerText + "\n\n";
}	

// Print collect.
alert(collect2);



