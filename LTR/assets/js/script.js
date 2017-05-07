/* --------------------Jquery - ready function-------------------- */
$( document ).ready(function() {
							 
/* --------------------Clear The Value on Focus-------------------- */ 
var defaultText = '';
	$('input[type=text], .form-field, textarea, .form-text-area').focus(function() {
		defaultText = $(this).val();
		$(this).val('');
});
$('input[type=text], .form-field, textarea, .form-text-area').blur(function() {
	if($(this).val() == ''){
		$(this).val(defaultText);
	}
});
/* --------------------/Clear The Value on Focus-------------------- */

/* --------------------Form - Checkbox - Switch Button-------------------- */
$('.switch-btn').click(function(){
	$(this).toggleClass("switchOn");
});
/* --------------------/Form - Checkbox - Switch Button-------------------- */

/* --------------------Alert Messages-------------------- */
$('.alert-message .close').click(function(e){
	e.preventDefault();
	$(this).parent('.alert-message').hide();
});
/* --------------------/Alert Messages-------------------- */
							 
/* --------------------Navigation - Menu Bar [Horizontal and Vertical]-------------------- */
$('.nav-bar a').mouseover(function() {
	$(this).next('ul').show();
});
$('.nav-bar a').mouseout(function() {
	$(this).next('ul').hide();
});

$('ul.sub-nav').mouseover(function() {
	$(this).show();
});
$('ul.sub-nav').mouseout(function() {
	$(this).hide();
});
/* --------------------/Navigation - Menu Bar [Horizontal and Vertical]-------------------- */	

/* --------------------Navigation - Menu Bar-------------------- */
$('.nav-bar-toggle').click(function() {
	$(this).next('.nav-bar').toggle();
});
/* --------------------/Navigation - Menu Bar-------------------- */

/* --------------------Navigation - Progress Bar-------------------- */
$('.nav-progress li').click(function(e) {
	e.preventDefault(); 
	$(this).addClass('active').siblings('li').removeClass('active');
});
/* --------------------/Navigation - Progress Bar------------------- */

/* --------------------Navigation - Off Canvas Menu-------------------- */
$('.off-menu-icon').click(function() {
	$('.inner-wrapper').animate({'left':'250px'}, 500);
	$('.close-off-menu').css('display','block');
	$('html, body').css('overflow', 'hidden');
});
$('.close-off-menu').click(function() {
	$('.inner-wrapper').animate({'left':'0'}, 500);
	$('.close-off-menu').css('display','none');
	$('html, body').css('overflow', 'visible');
});
/* --------------------/Navigation - Off Canvas Menu-------------------- */

/* --------------------Tabs-------------------- */
$('.tab-content .tab').hide();
$('.tab-content .tab.active').show();
$('.tabs .tab-links a').click(function(e) {
	e.preventDefault();  
	$(this).parent().addClass('active').siblings('.tabs .tab-links ul li').removeClass('active');
	$(this.hash).show().siblings('.tab-content .tab').hide();
});
/* --------------------/Tabs-------------------- */	

/* --------------------PopUp-------------------- */
$('.popup-icon').click(function(e) {
	e.preventDefault();  
	$('.popup-overlay').show();
	$('.popup-container').show();
	$('body').css('overflow', 'hidden'); //Disable scrolling while popup active, this line will disable scrollbar.
});

$('.popup-container .close, .popup-overlay').click(function(e) {
	e.preventDefault();  
	$('.popup-overlay').hide();
	$('.popup-container').hide();
	$('body').css('overflow', 'auto'); //  This line will enable scrollbar.
});
/* --------------------/PopUp-------------------- */

/* --------------------Back To Top-------------------- */
	var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} 
		else {
			$('.back-to-top').fadeOut(duration);
		}
	});
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
/* --------------------/Back To Top-------------------- */	

/* --------------------Solve last-child problem on IE8-------------------- */
// You can use 'jQuery CSS Method' to solve last-child problem on IE8, because jQuery support last-child.

$('.row .row:last-child').css('margin-bottom','0'); 

$('.nav-bar ul li:last-child').css('border-right','0 none'); 
$('.nav-bar ul li:last-child').css('border-bottom','0 none'); 

$('.off-menu ul li ul:last-child').css('border-bottom','1px solid #222'); 

$('.pagination li:last-child > a').css('margin-right','0'); 
/* --------------------/Solve last-child problem on IE8-------------------- */

});
/* --------------------/Jquery - ready function-------------------- */


