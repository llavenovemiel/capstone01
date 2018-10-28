// for testimonials
const testimonials = [["assets/images/testi-1.jpg","'Innovative. Best service'","-Donny Tramp, BRE"],
					["assets/images/testi-2.jpg","'Delivered great quality.'","-John Doe, Doe Group"],
					["assets/images/testi-3.jpg","'Unparalled service.'","-Gloria Royo, R&A"],
					["assets/images/testi-4.jpg","'We trust no one else.'","-Mark Cruz, Flash Construction"],
					["assets/images/testi-5.jpg","'Quality and innovation.'","-Abby Leigh, Leigh & Lark"]];
let index = 0;					
const loopTestimonial = function() {
	if (index >= testimonials.length) {
		index = 0;
		loopTestimonial();
	} else {
		$("#testi-image1").attr("src", testimonials[index][0]);
		$("#testi-text1").text(testimonials[index][1]);
		$("#testi-name1").text(testimonials[index][2]);
        $("#testi-image2").attr("src", testimonials[(index+1>=testimonials.length)?0:index+1][0]);
        $("#testi-text2").text(testimonials[(index+1>=testimonials.length)?0:index+1][1]);
        $("#testi-name2").text(testimonials[(index+1>=testimonials.length)?0:index+1][2]);
		index++;
		setTimeout(loopTestimonial, 2500);
	}
}
loopTestimonial();


// for carousel
var carousel = document.querySelector('.carousel');
var cellCount = 6;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-43.3vw) rotateY(' + angle + 'deg)';
}

function next() {
	selectedIndex++;
  	rotateCarousel();

}

function prev() {
	selectedIndex--;
  	rotateCarousel();

}

// var prevButton = document.querySelector('.previous-button');
// prevButton.addEventListener('click', function() {
//   selectedIndex--;
//   rotateCarousel();
// });

// var nextButton = document.querySelector('.next-button');
// nextButton.addEventListener('click', function() {
//   selectedIndex++;
//   rotateCarousel();
// });


