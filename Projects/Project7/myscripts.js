// JavaScript Document
	PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/Print1.jpg"
	PrintButton2.src = "Images/Print2.jpg"
	logo1.src = "Images/Logo1.gif"
	logo2.src = "Images/Logo2.jpg"
}


		var imgArray = new Array(
			'image1lg.jpg',
			'image2lg.jpg',
			'image3lg.jpg',
			'image4lg.jpg'
			

		);


		var titleArray = new Array(
			'Master Chef Pierre DeBois',
			'Meat on a grill',
			'A glass of wine',
			'Table of food'
			
		);
			
		var imgPath = "Images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}
		