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

var selectedOutdoor = undefined;

function popPosition(_outdoor) {
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

function outdoorPeopleAdd(_outdoor) {
	selected_company_num = undefined;
	if(document.getElementById("make_outdoor_add").style.zIndex == 2) {
		document.getElementById("make_outdoor_add").style.zIndex = 0;
	} 
	else {
		// 열외 추가창 앞으로
		document.getElementById("make_outdoor_add").style.zIndex = 2;
		popPosition(_outdoor);
		
		//선택된 열외 위치를 _outdoor로 변경
		outdoor_number = _outdoor;
		selected_outdoor = _outdoor;
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

function outdoorDeletePeople(_i, _j, _company) {
	let name = $("#outdoor_people_" + _i + "_" + _j + "").val();
	let man = _company.findPersonByName(name);
	if(man[0] != -1) {
		man[0].setLoc("생활관");
		printOutdoor(_company);	
	}
}

function outdoorFlameAdd(_i, _j) {
	if($("#outdoor_flame_people_" + _i + "_" + _j + "").val() != " ") {
		if(document.getElementById("outdoor_flame_people_" + _i + "_" + _j + "").style.backgroundColor == "rgb(239, 239, 239)") {
			document.getElementById("outdoor_flame_people_" + _i + "_" + _j + "").style.backgroundColor = "lightgreen";
		}
		else if (document.getElementById("outdoor_flame_people_" + _i + "_" + _j + "").style.backgroundColor = "lightgreen") {
			document.getElementById("outdoor_flame_people_" + _i + "_" + _j + "").style.backgroundColor = "rgb(239, 239, 239)";
		}
	}
	
}

function selectPeopleByRoom(_i) {
	for(let j = 0; j < 10; j++) {
		if($("#outdoor_flame_people_" + _i + "_" + j + "").val() != " ") {
			if(document.getElementById("outdoor_flame_people_" + _i + "_" + j + "").style.backgroundColor == "rgb(239, 239, 239)") {
				document.getElementById("outdoor_flame_people_" + _i + "_" + j + "").style.backgroundColor = "lightgreen";
			}
			else if (document.getElementById("outdoor_flame_people_" + _i + "_" + j + "").style.backgroundColor = "lightgreen") {
				document.getElementById("outdoor_flame_people_" + _i + "_" + j + "").style.backgroundColor = "rgb(239, 239, 239)";
			}
		}
	}
}

function cancelOutdoorPeople(_company) {
	selected_company_num = undefined;
	for(let i = 0; i < _company.getNumDorm(); i++) {
		for(let j = 0; j < 10; j++) {
			if (document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "lightgreen") {
				document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "rgb(239, 239, 239)";
			}
		}
	}
	$("#make_outdoor_add").hide();
}

function addOutdoorPeople(_company) {
	let man;
	let index = 0;
	let arr = new Array();
	for(let i = 0; i < _company.getNumDorm(); i++) {
		for(let j = 0; j < 10; j++) {
			if(document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor == "lightgreen") {
				arr[index] = $("#outdoor_flame_people_" + i + "_" + j + "").val();
				index++;
			}
		}
	}
	for(let i = 0; i < arr.length; i++) {
		man = _company.findPersonByName(arr[i]);
		if(man[0] != -1) {
			man[0].setLoc($("#outdoor_name" + selected_outdoor + "").val());
			printOutdoor(_company);	
		}
	}
	for(let i = 0; i < _company.getNumDorm(); i++) {
		for(let j = 0; j < 10; j++) {
			if (document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "lightgreen") {
				document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "rgb(239, 239, 239)";
			}
		}
	}
	$("#make_outdoor_add").hide();
}

function addAllOutdoorPeople(_company) {
	let man;
	let index = 0;
	let arr = new Array();
	for(let i = 0; i < _company.getNumDorm(); i++) {
		for(let j = 0; j < 10; j++) {
			if($("#outdoor_flame_people_" + i + "_" + j + "").val() != " ") {
				document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "lightgreen";
			}
			if(document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor == "lightgreen") {
				arr[index] = $("#outdoor_flame_people_" + i + "_" + j + "").val();
				index++;
			}
		}
	}
	for(let i = 0; i < arr.length; i++) {
		man = _company.findPersonByName(arr[i]);
		if(man[0] != -1) {
			man[0].setLoc($("#outdoor_name" + selected_outdoor + "").val());
			printOutdoor(_company);	
		}
	}
	for(let i = 0; i < _company.getNumDorm(); i++) {
		for(let j = 0; j < 10; j++) {
			if (document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "lightgreen") {
				document.getElementById("outdoor_flame_people_" + i + "_" + j + "").style.backgroundColor = "rgb(239, 239, 239)";
			}
		}
	}
	$("#make_outdoor_add").hide();
}

function returnOutdoorPeople(_company) {
	let arr = new Array();
	arr = _company.findPersonByLocation($("#outdoor_name" + selected_outdoor + "").val());
	for(let i = 0; i < arr.length; i++) {
		if(arr[0] != -1) {
			arr[i].setLoc("생활관");
			printOutdoor(_company);	
		}
		else break;
	}
	$("#make_outdoor_add").hide();
}