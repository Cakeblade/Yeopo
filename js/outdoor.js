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
		if(_mansArr[0] != -1) this.numMans[_index] = _mansArr.length;
		else this.numMans[_index] = 0;
		this.allNum = this.getallNum() + _mansArr.length;
	}
	
	initMans(_index) {
		this.mans[_index] = -1;
		this.allNum = this.getAllNum() - this.numMans[_index];
		this.numMans[_index] = 0;
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

function updateOutdoor(_company) {
	let arr = new Array();
	for(let i = 0; i < outdoorArray.length; i++) {
		arr = _company.findPersonByLocation(outdoorArray[i].getName())
		outdoorArray[i].initMans(_company.getNum());
		if(arr != 0 && arr != undefined) outdoorArray[i].setMans(_company.getNum(), arr);
	}
}

function printOutdoor(_company) {
	// initialize
	for(let i = 0; i < 15; i++) {
		$("#outdoor_name" + i + "").val(outdoorArray[i].getName());
		for(let j = 0; j < 10; j++) {
			$("#outdoor_people_" + i + "_" + j + "").val(" ");
		}
	}
	updateOutdoor(_company);
	for(let i = 0; i < 15; i++) {
		$("#outdoor_name" + i + "").val(outdoorArray[i].getName());
		for(let j = 0; j < 10; j++) {
			if(outdoorArray[i].getMans(_company.getNum()) == -1) break;
			if(outdoorArray[i].getMans(_company.getNum())[j] == undefined) break;
			else {
				$("#outdoor_people_" + i + "_" + j + "").val(outdoorArray[i].getMans(_company.getNum())[j].getName());
			}
		}
		$("#outdoor_name" + i + "_num").val("열외 : " + outdoorArray[i].getNumMans(_company.getNum()));
	}
}

function outdoor_delete_people(_i, _j, _company) {
	let name = $("#outdoor_people_" + _i + "_" + _j + "").val();
	let man = _company.findPersonByName(name);
	if(man[0] != -1) {
		man[0].setLoc("생활관");
		printOutdoor(_company);	
	}
}

function outdoor_flame_add(_i, _j, _company) {
	
}

function cancel_outdoor_people() {
	selected_company_num = undefined;
	$("#make_outdoor_add").css({
		"display" : "none"
	});
}

function add_outdoor_people() {
	let name = $("#outdoor_people_" + _i + "_" + _j + "").val();
	let man = _company.findPersonByName(name);
	if(man[0] != -1) {
		man[0].setLoc("생활관");
		printOutdoor(_company);	
	}
}

function return_outdoor_people() {
	
}
