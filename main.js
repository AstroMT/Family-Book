var images = [
    "IMG_2926 (1).jpg", //Me!
    "IMG_4036.PNG", //My sister
    "IMG_3232.jpg", //My mom
    "IMG_1263.jpg", //My dad
    "IMG_8156.jpg", //My grandmother
    "IMG_8393.jpg", //My grandfather
    "img_thumbnail.jpg", //Thumbnail
];

var header = [
    "This is me, Medha Thippireddy",
    "This is my sister, Mahitha", 
    "This is my mom, Yamini", 
    "This is my dad, Laxmi Narasimha", 
    "This is my grandmother, Padma", 
    "Lastly, this is my grandfather, Balachandra",
    "My Family Book",
]

var description = [
    "This is me! I'm a rising 6th grader and I love math, science, and computers.", 
    "This is my older sister. She's 15 years old and will be going to 10th grade.",
    "This is my mom, who is a software developer.",
    "This is my dad, who is a software engineer.",
    "This is my maternal grandmother.",
    "This is my maternal grandfather.",
    "Click next to flip though it!",
]
  
var i = 0;
  
function update() {
    if(i == 6) {
        i = 0;
    }
    
    document.getElementById("img_photo").src = images[i];
    document.getElementById("header_name").innerHTML = header[i];
    document.getElementById("label_description").innerHTML = description[i];
    i++;
}