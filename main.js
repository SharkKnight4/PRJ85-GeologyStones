canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
obsidian_width = 120;
obsidian_height = 70;
obsidian_image = "obsidian.png";
obsidian_x = 10;
obsidian_y = 10;

emerald_width = 120;
emerald_height = 70;
emerald_image = "emerald.png";
emerald_x = 10;
emerald_y = 100;
background_image="magmabackground.jpg"
background_imgTag = "https://i.postimg.cc/bv5d35nK/racing.jpg";
background_imgTag = new Image(); 
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

obsidian_imgTag = new Image(); //defining a variable with a new image
obsidian_imgTag.onload = uploadobsidian; // setting a function, onloading this variable
obsidian_imgTag.src = obsidian_image;   // load image

emerald_imgTag = new Image(); //defining a variable with a new image
emerald_imgTag.onload = uploademerald; // setting a function, onloading this variable
emerald_imgTag.src = emerald_image;   // load image
function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	obsidian_imgTag = new Image(); //defining a variable with a new image
	obsidian_imgTag.onload = uploadobsidian; // setting a function, onloading this variable
	obsidian_imgTag.src = obsidian_image;   // load image

	emerald_imgTag = new Image(); //defining a variable with a new image
	emerald_imgTag.onload = uploademerald; // setting a function, onloading this variable
	emerald_imgTag.src = emerald_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadobsidian() {
	ctx.drawImage(obsidian_imgTag, obsidian_x, obsidian_y, obsidian_width, obsidian_height);
}
function uploademerald() {
	ctx.drawImage(emerald_imgTag, emerald_x, emerald_y, emerald_width, emerald_height);
}