class Person // Node of linked list
{
	constructor(_name, _pos, _typ)
	{
		this.val = new Array(_name, _pos, _typ);
		this.next = null;
	}
	
	//getter
	getVal() {return this.val};
	getName() {return this.val[0];}
	getPos() {return this.val[1];}
	getTyp() {return this.val[2];}
	getNext() {return this.next;}
	
	//setter
	setName(_name) {this.val[0] = _name;}
	setPos(_Pos) {this.val[1] = _Pos;}
	setTyp(_Typ) {this.val[2] = _Typ;}
	setNext(_level) {this.next = _level;}
	
}

class Company
{
	constructor(_name, _mans) // 생성시에 초기 매개변수로 인원 1명이 필요
	{
		this.name = _name;
		this.numPer = 0; // 중대원들 총원 수
		this.numDorm = 1; // 생활관 index
		this.dorm = new Array(_mans); // 생활관 배열, 인원을 넣어 초기화해야한다, head들의 배열.
		this.nDorm = new Array(1); // 생활관별 인원수를 저장하는 배열
	}
	
	// getter
	getName() {return this.name;}
	getNumPer() {return this.NumPer;}
	getNumDorm() {return this.numDorm;}
	getNumNDorm(_index) {return this.nDorm[_index - 1];}
	
	// setter
	setNumDorm(_numDorm) {this.numDorm = _numDorm;} 
	setNumPer(_NumPer) {this.NumPer = _NumPer;}
	
	// function related to NumPer
	calcNumPer()
	{
		for(let i; i < this.numDorm; i++)
		{
			
		}
	}
	
	// function related to Dorm list
	makeNewDorm(_mans) // initialize new dorm
	{
		this.dorm.push(_mans);
		this.nDorm.push(1);
		this.setNumDorm(this.getNumDorm()+1);
	}
	
	insertLast(_mans, _iDorm) //인원, 생활관 / 매개변수는 1, 2 이렇게 받을 예정이기 때문에 밑에서 -1을 해준다. (아니면 간부 목록을 0으로 넣고 1부터 index를 시작해도 될 듯?)
	{
		let curNode = this.dorm[_iDorm-1];
		while(curNode.getNext())
		{
			curNode = curNode.getNext();
		}
		curNode.next = _mans;
		this.nDorm[_iDorm - 1] = this.nDorm[_iDorm - 1] + 1;
	}
	/*
	insertAt(_mans, _iDorm, _index) //인원, 생활관, 넣을 자리
	{
		let preNode;
		let curNode = this.dorm[_iDorm-1];
		let count = 0;
		
		if(_index > 0 && _index > this.nDorm[_iDorm-1]) //index가 인원수보다 많으면
		{
			return;
		}
		
		if(_index == 0) // 맨 앞에 넣을거면
		{
			_mans.setNext(this.dorm[_iDorm-1]);
			this.nDorm[_iDorm-1]++;
			this.dorm[_iDorm-1] = _mans;
			return;
		}
		
		while(count < _index) // index Node까지 이동
		{
			preNode = curNode;
			count++;
			curNode.setNext(curNode.getNext());
		}
		_mans.setNext(curNode);
		preNode.setNext(_mans);
		this.nDorm[_iDorm-1]++;
	}*/
	
	getAt(_iDorm, _index)
	{
		let curNode = this.dorm[_iDorm-1];
		let count = 0;
		
		while(curNode)
		{
			if(count == _index)
			{
				return curNode;
			}	
			count++;
			curNode = curNode.getNext();
		}
		return null;
	}
	
	removeAt() // 나중에 필요할 때 만들기
	{
		
	}
	
	printList(_iDorm) // 사실상 test용 함수 -- 나중에 이름 배열을 return하는 함수가 될듯?
	{
		let curNode = this.dorm[_iDorm-1];
		while(curNode?.getNext() != null)
		{
			document.writeln(curNode.getName());
			curNode = curNode.getNext();
		}
		document.writeln();
	}
}


const p1 = new Person("jch","dorm","0");
const p2 = new Person("jhc","dorm","0");
const p3 = new Person("abc","dorm","0");
const p4 = new Person("cba","dorm","0");

const p5 = new Person("qqq","dorm","0");
const p6 = new Person("www","dorm","0");
const p7 = new Person("eee","dorm","0");
const p8 = new Person("rrr","dorm","0");

const sig = new Company("SIG", p1);

sig.makeNewDorm(p5);

sig.insertLast(p2, 1);
sig.insertLast(p3, 1);
sig.insertLast(p4, 1);
//sig.insertAt(p3, 1, 3)

sig.insertLast(p6, 2);
sig.insertLast(p7, 2);
sig.insertLast(p8, 2);
//sig.insertAt(p7, 2, 3)

sig.printList(1);
sig.printList(2);