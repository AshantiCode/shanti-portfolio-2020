

const linkedin = document.getElementById("linkedin");
const github = document.getElementById("github");
const mail = document.getElementById("mail");
const flower = document.getElementById("flower");
const hello = document.getElementById("hello");
const scroll = document.getElementById("arrow-scroll");

let animation1 = bodymovin.loadAnimation({
	container: linkedin,
	renderer: "svg",
	path: "js/linkedin.json",
	autoplay: false,
	loop: true,
	speed: 0.5,
});


let animation2 = bodymovin.loadAnimation({
	container: github,
	renderer: "svg",
	path: "js/github-transp.json",
	autoplay: false,
	loop: true,
	// speed: 0.5,
});

let animation3 = bodymovin.loadAnimation({
	container: mail,
	renderer: "svg",
	path: "js/email.json",
	autoplay: false,
	loop: true,
	speed: 0.5,
});

let animation4 = bodymovin.loadAnimation({
	container: flower,
	renderer: "svg",
	path: "js/flower.json",
	autoplay: true,
	loop: true,
	speed: 0.5,
});

let animation5 = bodymovin.loadAnimation({
	container: hello,
	renderer: "svg",
	path: "js/hello.json",
	autoplay: true,
	loop: false,

});
animation5.setSpeed(0.5)

let animation6 = bodymovin.loadAnimation({
	container: scroll,
	renderer: "svg",
	path: "js/downward-circle.json",
	autoplay: true,
	loop: true,
});



linkedin.addEventListener("mouseenter", function () {
	animation1.play();
});

linkedin.addEventListener("mouseleave", function () {
	animation1.stop();
});

github.addEventListener("mouseenter", function () {
	animation2.play();
});

github.addEventListener("mouseleave", function () {
	animation2.stop();
});

mail.addEventListener("mouseenter", function () {
	animation3.play();
});

mail.addEventListener("mouseleave", function () {
	animation3.stop();
});

