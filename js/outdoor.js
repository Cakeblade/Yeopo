class Outdoor {
	constructor(_name) {
		this.name = _name;
		this.mans = new Array(6); // 0~5까지 중대를 지정
		this.numMans = new Array(0, 0, 0, 0, 0, 0);
		this.allNum = 0;
	}
	
	// getter
	getName() {
		return this.name;
	}
	getMans() {
		return this.mans;
	}
	getMans(_index) {
		return this.mans[_index];
	}
	getNumMans() {
		return this.numMans;
	}
	getNumMans(_index) {
		return this.numMans[_index];
	}
	getallNum() {
		return this.numMans;
	}
	getAllNum(_index) {
		return this.numMans[_index];
	}
	
	// setter
	setName(_name) {
		this.name = _name;
	}
	setMans(_index, _mansArr) {
		this.mans[_index] = _mansArr;
		this.numMans[_index] = _mansArr.length;
		this.allNum = this.getallNum() + _mansArr.length;
	}
		
}


function pop_position(_outdoor) {
	let button = "#outdoor_name" + _outdoor;
	let div = "make_outdoor_add";
	let jdiv = $(button);
	
	let offset = jdiv.offset();
	let _x = 0;
	let _y = 0;
	
	$("#make_outdoor_add").css({
		"position" : "absolute",
		"top" : offset.top,
		"left" : offset.left,
		"display" : "block"
	});
	
}

function outdoor_people_add(_outdoor) {
	selected_company_num = undefined;
	if(document.getElementById("make_outdoor_add").style.zIndex == 2 && _outdoor == outdoor_number) {
		document.getElementById("make_outdoor_add").style.zIndex = 0;
	} 
	else {
		// 열외 추가창 앞으로
		document.getElementById("make_outdoor_add").style.zIndex = 2;
		pop_position(_outdoor);
		
		//선택된 열외 위치를 _outdoor로 변경
		outdoor_number = _outdoor;

	}
}

function cancel_outdoor_people() {
	selected_company_num = undefined;
	$("#make_outdoor_add").css({
		"display" : "none"
	});
}

function updateOutdoor(_company) {
	let arr = new Array();
	for(let i = 0; i < outdoorArray.length; i++) {
		arr = _company.findPersonByLocation(outdoorArray[i].getName())
		if(arr != 0 && arr != undefined) outdoorArray[i].setMans(_company.getNum(), arr);
	}
}