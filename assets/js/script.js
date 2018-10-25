// $(document).ready(function(){
//     $("#awards").click(function(){
//         $(".right-content").toggleClass("right-content-shown");
//     });
// });

// $("#awards").click(function(){
//     $(".right-content-container").slideToggle("slow");
// });

// for testimonials
const testimonials = [["assets/images/testi-1.jpg","'Innovative. Best service'","-Donny Tramp, Boston Real Estate"],
					["assets/images/testi-2.jpg","'Delivered great quality and ahead of time.'","-Brack Obama, Brack Group of Companies"],
					["assets/images/testi-3.jpg","'Their technical know-how is unparalled.'","-Gloria Royo, Royo and Associates"],
					["assets/images/testi-4.jpg","'We trust no one else when it comes to bridges.'","-Mark Cruz, Flash Construction"],
					["assets/images/testi-5.jpg","'Quality, innovation and customer service.'","-Abby Leigh, Leigh & Lark"]];
let index = 0;					
const loopTestimonial = function() {
	if (index >= testimonials.length) {
		index = 0;
		loopTestimonial();
	} else {
		$("#testi-image").attr("src", testimonials[index][0]);
		$("#testi-text").text(testimonials[index][1]);
		$("#testi-name").text(testimonials[index][2]);
		index++;
		setTimeout(loopTestimonial, 2000);
	}
}
loopTestimonial();
//

$(document).ready(function(){
    $(".expertise-1").hover(function(){
        $(".expertise-img-1").css("display", "inline");
        }, function(){
        $(".expertise-img-1").css("display", "none");
    });
});

$(document).ready(function(){
    $(".expertise-2").hover(function(){
        $(".expertise-img-2").css("display", "inline");
        }, function(){
        $(".expertise-img-2").css("display", "none");
    });
});

$(document).ready(function(){
    $(".expertise-3").hover(function(){
        $(".expertise-img-3").css("display", "inline");
        }, function(){
        $(".expertise-img-3").css("display", "none");
    });
});

$(document).ready(function(){
    $(".expertise-4").hover(function(){
        $(".expertise-img-4").css("display", "inline");
        }, function(){
        $(".expertise-img-4").css("display", "none");
    });
});

$(document).ready(function(){
    $(".expertise-5").hover(function(){
        $(".expertise-img-5").css("display", "inline");
        }, function(){
        $(".expertise-img-5").css("display", "none");
    });
});



