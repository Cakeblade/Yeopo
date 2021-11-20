class Outdoor {
	Outdoor(_name) {
		this.name = _name;
		this.mans = new Array(6); // 0~5까지 중대를 지정
		for(let i = 0; i < 6; i++) {
			this.mans[i] = new Array();
		}
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
	setNumMans(_index, _value) {
		this.numMans[_index] = _value;
	}
	
	addMans(_mans, _com) {
		let index;
		switch (_com) {
			case "sig":
				index = 0;
			case "c2":
				index = 1;
			case "c3":
				index = 2;
			case "c4":
				index = 3;
			case "c5":
				index = 4;
			case "c6":
				index = 5;
			default:
				alert("Error!");
				return;
		}
		this.mans[index][this.getNumMans(index)] = _mans;
		this.setNumMans(index, this.getNumMans(index) + 1);
	}
	
}

function outdoor_people_add(_outdoor) {
	selected_company_num = undefined;
	if(document.getElementById("make_outdoor_add").style.zIndex == 2 && _outdoor == outdoor_number) {
		document.getElementById("make_outdoor_add").style.zIndex = 0;
	} 
	else {
		// 열외 추가창 앞으로
		document.getElementById("make_outdoor_add").style.zIndex = 2;
		
		//선택된 열외 위치를 _outdoor로 변경
		outdoor_number = _outdoor;

	}
}