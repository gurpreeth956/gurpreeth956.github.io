var slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
}

// Thumbnail image controls
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex1-1].style.display = "block";
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex2 = 1}
    if (n < 1) {slideIndex2 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2-1].style.display = "block";
}


var slideIndex3 = 1;
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    if (n > slides.length) {slideIndex3 = 1}
    if (n < 1) {slideIndex3 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3-1].style.display = "block";
}


var slideIndex4 = 1;
showSlides4(slideIndex4);

// Next/previous controls
function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

// Thumbnail image controls
function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides4");
    if (n > slides.length) {slideIndex4 = 1}
    if (n < 1) {slideIndex4 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex4-1].style.display = "block";
}


var slideIndex5 = 1;
showSlides5(slideIndex5);

// Next/previous controls
function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

// Thumbnail image controls
function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides5");
    if (n > slides.length) {slideIndex5 = 1}
    if (n < 1) {slideIndex5 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex5-1].style.display = "block";
}

