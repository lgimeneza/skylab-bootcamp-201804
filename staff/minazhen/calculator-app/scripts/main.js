var $input = $('#calculator-screen');
var $one = $('.one');
var $two = $('.two');
var $three = $('.three');
var $four = $('.four');
var $five = $('.five');
var $six = $('.six');
var $seven = $('.seven');
var $eight = $('.eight');
var $nine = $('.nine');
var $zero = $('.zero');

var $sum = $('.sum');
var $sub = $('.sub');
var $mul = $('.mul');
var $div = $('.div');
var $negate = $('.negate');
var $comma = $('.comma');

var $equal = $('.equal');
var $clear = $('.clear');
var $clearAll = $('.clearAll');

//numbers

$one.on("click", function(e) {
    e.preventDefault();
    c.one();   
    $input.val(c.status());
});

$two.on("click", function(e) {
    e.preventDefault();
    c.two();   
    $input.val(c.status());
});

$three.on("click", function(e) {
    e.preventDefault();
    c.three();   
    $input.val(c.status());
});

$four.on("click", function(e) {
    e.preventDefault();
    c.four();   
    $input.val(c.status());
});

$five.on("click", function(e) {
    e.preventDefault();
    c.five();   
    $input.val(c.status());
});

$six.on("click", function(e) {
    e.preventDefault();
    c.six();   
    $input.val(c.status());
});

$seven.on("click", function(e) {
    e.preventDefault();
    c.seven();   
    $input.val(c.status());
});

$eight.on("click", function(e) {
    e.preventDefault();
    c.eight();   
    $input.val(c.status());
});

$nine.on("click", function(e) {
    e.preventDefault();
    c.nine();   
    $input.val(c.status());
});

$zero.on("click", function(e) {
    e.preventDefault();
    c.zero();   
    $input.val(c.status());
});

//operations

$sum.on("click", function(e) {
    e.preventDefault();
    c.sum();   
    $input.val(c.status());
});

$sub.on("click", function(e) {
    e.preventDefault();
    c.sub();   
    $input.val(c.status());
});

$mul.on("click", function(e) {
    e.preventDefault();
    c.mul();   
    $input.val(c.status());
});

$div.on("click", function(e) {
    e.preventDefault();
    c.div();   
    $input.val(c.status());
});

//modifiers

$negate.on("click", function(e) {
    e.preventDefault();
    c.negate();   
    $input.val(c.status());
});

$comma.on("click", function(e) {
    e.preventDefault();
    c.comma();   
    $input.val(c.status());
});

//other

$equal.on("click", function(e) {
    e.preventDefault();
    c.equal();   
    $input.val(c.status());
});

$clear.on("click", function(e) {
    e.preventDefault();
    c.clear();   
    $input.val(c.status());
});

$clearAll.on("click", function(e) {
    e.preventDefault();
    c.clearAll();   
    $input.val(c.status());
});