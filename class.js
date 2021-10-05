class Person
{
	constructor(_name, _pos, _typ)
	{
		this.name = _name;
		this.pos = _pos;
		this.typ = _typ;
	}
	
	getName() {return this.name;}
	getPos() {return this.pos;}
	getTyp() {return this.typ;}
	setName(_name) {this.name = _name;}
	setPos(_Pos) {this.name = _Pos;}
	setTyp(_Typ) {this.name = _Typ;}
	
}

class Company
{
	constructor(_name, _per)
	{
		this.name = _name;
		this.numPer = 0; // 중대원들 총원 수
		this.numDorm = 0; // 생활관 index
		this.conf = new Array(0, ); // 생활관 배열
		this.nConf = new Array(); // 생활관별 인원수를 저장하는 배열
		this.pushDorm(); // initialize dormitory
	}
	
	// getter
	getName() {return this.name;}
	getNumPer() {return this.NumPer;}
	getNumDorm() {return this.numDorm;}
	
	// setter
	setNumDorm(_numDorm) {this.numDorm = _numDorm;} 
	setNumPer(_NumPer) {this.NumPer = _NumPer;}
	
	// function related to NumPer
	calcNumPer()
	{
		var temp = 0;
		for(var i = 0; i < 30; i++)
		{
			if(this.mans[i] == undefined) break;
			this.temp++;
		}
		this.setNumPer(this.temp + 1)
	}
	
	// function related to Dorm
	pushDorm(_Mans) // 중대에 생활관을 추가하는 함수
	{
		this.conf[this.getNumDorm()][0]= _Mans;
		this.nConf.push(1);
		this.setNumDorm(this.getNumDorm() + 1);
	}
	
	printDorm(_index) // 생활관 하나의 인원들의 이름을 출력하는 함수
	{
		for(var i = 0; this.conf[_index][i] != undefined ; i++)
		{
			alert(this.conf[_index][i][0]);
		}
	}
	
	addMans(_person, _dorm) // 생활관 안에 인원을 넣는 함수
	{
		this.conf[_dorm][this.nConf[_dorm]] = _person;
		this.setNumPer(this.getNumPer() + 1);
	}
}

class Brigade //필요한가?
{
	constructor()
	{
		
	}	
}

const jch = new Person("jch","dorm","0");
const jhc = new Person("jhc","dorm","0");

const sig = new Company("SIG", jch);

sig.pushDorm(jch);

sig.addMans(jhc, 0);

sig.printDorm(0);