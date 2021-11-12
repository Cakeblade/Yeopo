class Person // Node of linked list
{
	constructor(_name, _pos, _typ, _loc)
	{
		this.val = new Array(_name, _pos, _typ, _loc);
		this.next = null;
	}

	//getter
	getVal() {return this.val};
	getName() {return this.val[0];}
	getPos() {return this.val[1];}
	getTyp() {return this.val[2];}
	getLoc() {return this.val[3];}
	getNext() {return this.next;}

	//setter
	setName(_name) {this.val[0] = _name;}
	setPos(_Pos) {this.val[1] = _Pos;}
	setTyp(_Typ) {this.val[2] = _Typ;} // 용사 0, 간부 1
	setLoc(_Loc) {this.var[3] = _Loc;}
	setNext(_level) {this.next = _level;}

}

class Company
{
	constructor(_name, _cname, _mans) // 생성시에 초기 매개변수로 인원 1명이 필요 (중대장을 기준으로 할 예정)
	{
		this.name = _name;
		this.cname = _cname;
		this.numMans = 1; // 중대원들 총원 수
		if(_mans.getTyp() == 0)
		{
			this.Warrior = 1; // 용사들의 수
			this.Officer = 0; // 간부들의 수
		}
		else
		{
			this.Warrior = 0; // 용사들의 수
			this.Officer = 1; // 간부들의 수
		}
		this.numDorm = 1; // 생활관 index
		this.dorm = new Array(_mans); // 생활관 배열, 인원을 넣어 초기화해야한다, head들의 배열.
		this.nDorm = new Array(); // 생활관별 인원수를 저장하는 배열
		this.nDorm.push(parseInt('1', 10));
	}

	// getter
	getName() {return this.name;}
	getCName() {return this.cname;}
	getNumDorm() {return this.numDorm;}
	getNumMans() {return this.numMans;}
	getDorm() {return this.dorm;}
	getDorm(_index) {return this.dorm[_index];}
	getNDorm() {return this.nDorm;}
	getNDorm(_index) {return this.nDorm[_index];}
	getWarrior() // 용사 인원을 세는 함수
	{
		let room = 1;
		let cnt = 0;
		while(this.dorm[room])
		{
			let curNode = this.getDorm(room);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getTyp() == 0) cnt++;
				curNode = curNode.getNext();
			}
			if(curNode.getTyp() == 0) cnt++;
			room++;
		}
		return cnt;
	}
	getOfficer() // 간부 인원을 세는 함수
	{
		let room = 1;
		let cnt = 0;
		while(this.dorm[room])
		{
			let curNode = this.getDorm(room);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getTyp() == 1) cnt++;
				curNode = curNode.getNext();
			}
			if(curNode.getTyp() == 1) cnt++;
			room++;
		}
		return cnt;
	}
	getRemainPerson() {return this.getWarrior() - this.getOutdoorsMans();}

	// setter
	setNumDorm(_numDorm) {this.numDorm = _numDorm;}
	setNumMans(_numMans) {this.numMans = _numMans;}
	setWarrior(_warrior) {this.Warrior = _warrior;}
	setOfficer(_officer) {this.Warrior = _officer;}

	// function related to Dorm list
	makeNewDorm(_mans) // initialize new dorm
	{
		this.dorm.push(_mans);
		this.nDorm.push(parseInt('1', 10));
		this.setNumDorm(this.getNumDorm() + 1);
		this.setWarrior(this.getWarrior() + 1);
		this.setNumMans(this.getNumMans() + 1);
	}

	insertLast(_mans, _iDorm) //인원, 생활관 간부 목록을 0으로 넣고 1부터 index를 시작한다.
	{
		let curNode = this.getDorm(_iDorm);
		while(curNode.getNext())
		{
			curNode = curNode.getNext();
		}
		curNode.next = _mans;
		this.nDorm[_iDorm] = this.nDorm[_iDorm] + 1;
		this.setNumMans(this.getNumMans() + 1);
	}

	insertAt(_mans, _iDorm, _index) //인원, 생활관, 넣을 자리
	{
		let preNode;
		let curNode = this.getDorm(_iDorm);
		let count = 0;

		if(_index - 1 > 0 && _index - 1 > this.nDorm[_iDorm]) //index가 인원수보다 많으면
		{
			document.writeln("Error!");
			return;
		}

		if(_index == 1) // 맨 앞에 넣을거면
		{
			_mans.setNext(this.getDorm(_iDorm));
			this.nDorm[_iDorm]++;
			this.dorm[_iDorm] = _mans;
			this.setNumMans(this.getNumMans() + 1);
			return;
		}

		while(count < _index - 1) // index Node까지 이동
		{
			preNode = curNode;
			count++;
			curNode = curNode.getNext();
		}
		_mans.setNext(curNode);
		preNode.setNext(_mans);
		this.nDorm[_iDorm]++;
		this.setNumMans(this.getNumMans() + 1);
	}

	getAt(_iDorm, _index)
	{
		let curNode = this.getDorm(_iDorm);
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

	removeAt() // 나중에 필요할 때 만들기 - file i/o 까지 다 구현하고 html단에서의 중대원 추가/삭제 구현시 만질 듯
	{

	}

	printList(_iDorm) // 사실상 test용 함수 -- 나중에 이름 배열을 return하는 함수가 될듯?
	{
		let curNode = this.getDorm(_iDorm);
		while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
		{
			document.writeln(curNode.getName());
			curNode = curNode.getNext();
		}
		document.writeln(curNode.getName()); // 이거 안적으면 맨 마지막 노드가 안나온다. 해결 방법이 필요한듯.
		document.writeln();
		//alert(curNode.getName())
	}

	returnList(cnt) // 생활관 인원 리스트를 return?
	{
		let arrIndex = 0;
		var arr = new Array();
		let curNode = this.getDorm(cnt);
		while(curNode.getNext())
		{
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				//document.writeln(curNode.getName());
				arr[arrIndex] = curNode;
				arrIndex++;
				curNode = curNode.getNext();
			}
			//document.writeln(curNode.getName());
			arr[arrIndex] = curNode;
			arrIndex++;
			cnt++;
		}
		return arr;
	}

	// function related to search
	findPersonByName(_name) // 이름으로 Person 객체를 찾는 함수 - return -> Person Node
	{
		let cnt = 0;
		let arrIndex = 0;
		var arr = new Array();
		while(this.dorm[cnt])
		{
			let curNode = this.getDorm(cnt);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getName() == _name)
				{
					//document.writeln(curNode.getName());
					arr[arrIndex] = curNode;
					arrIndex++;
				}
				curNode = curNode.getNext();
			}
			if(curNode.getName() == _name)
			{
				//document.writeln(curNode.getName());
				arr[arrIndex] = curNode;
				arrIndex++;
			}
			cnt++;
		}
		return arr;
	}

	findPersonByPos(_pos) // 위치로 Person 객체를 찾는 함수 - return -> Person Node
	{
		let cnt = 0;
		let arrIndex = 0;
		var arr = new Array();
		while(this.dorm[cnt])
		{
			let curNode = this.getDorm(cnt);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getPos() == _pos)
				{
					//document.writeln(curNode.getPos());
					arr[arrIndex] = curNode;
					arrIndex++;
				}
				curNode = curNode.getNext();
			}
			if(curNode.getPos() == _pos)
			{
				//document.writeln(curNode.getPos());
				arr[arrIndex] = curNode;
				arrIndex++;
			}
			cnt++;
		}
		return arr;
	}

	findPersonByType(_typ) // 타입(var 아님)으로 Person 객체를 찾는 함수 - return -> Person Node
	{
		let cnt = 0;
		let arrIndex = 0;
		var arr = new Array();
		while(this.dorm[cnt])
		{
			let curNode = this.getDorm(cnt);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getTyp() == _typ)
				{
					//document.writeln(curNode.getName());
					arr[arrIndex] = curNode;
					arrIndex++;
				}
				curNode = curNode.getNext();
			}
			if(curNode.getTyp() == _typ)
			{
				//document.writeln(curNode.getName());
				arr[arrIndex] = curNode;
				arrIndex++;
			}
			cnt++;
		}
		return arr;
	}

	findPersonByLocation(_Loc) // 현재 위치로 Person 객체를 찾는 함수 - return -> Person Node
	{
		let cnt = 0;
		let arrIndex = 0;
		var arr = new Array();
		while(this.dorm[cnt])
		{
			let curNode = this.getDorm(cnt);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getLoc() == _Loc)
				{
					//document.writeln(curNode.getName());
					arr[arrIndex] = curNode;
					arrIndex++;
				}
				curNode = curNode.getNext();
			}
			if(curNode.getLoc() == _Loc)
			{
				//document.writeln(curNode.getName());
				arr[arrIndex] = curNode;
				arrIndex++;
			}
			cnt++;
		}
		return arr;
	}

	getOutdoorsMans() // 현재 생활관 외에 있는 사람(== 열외)를 계산해서 return하는 함수
	{
		let room = 1;
		let cnt = 0;
		while(this.dorm[room])
		{
			let curNode = this.getDorm(room);
			while(curNode?.getNext() != null) // ? 안붙이면 오류난다. ㅁㄴㅇㄹ
			{
				if(curNode.getLoc() != "생활관") cnt++;
				curNode = curNode.getNext();
			}
			if(curNode.getLoc() != "생활관") cnt++;
			room++;
		}
		return cnt;
	}
}