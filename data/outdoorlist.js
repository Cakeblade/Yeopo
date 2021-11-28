var o1 = new Outdoor("휴가");
var o2 = new Outdoor("격리");
var o3 = new Outdoor("배차");
var o3 = new Outdoor("외진");
var o4 = new Outdoor("무전");
var o5 = new Outdoor("CCTV");
var o6 = new Outdoor("탄약고");
var o7 = new Outdoor("위병소");
var o8 = new Outdoor("PX");
var o9 = new Outdoor("집가고싶다");
var o10 = new Outdoor("살려줘");
var o11 = new Outdoor("저기");
var o12 = new Outdoor("여기");
var o13 = new Outdoor("고기");
var o14 = new Outdoor("구구");
var o15 = new Outdoor("가가");

var outdoorArray = new Array();
let j = 0;

for(let i = 0; i < 15; i++) {
	j = i + 1;
	eval('outdoorArray[' + i + '] = o' + j);
}