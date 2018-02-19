var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);

function picLink() {
	var allImages=document.querySelectorAll("img");

	for (var i = 0; i < allImages.length; i++) {
		allImages[i].className="hide";
	}

	var picId = this.attributes["data-img"].value;
	var pic = document.getElementById(picId);
	if (pic.className==="hide") {
		pic.className="";
	} else {
		pic.className="hide";
	}
}