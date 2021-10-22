includeJs("./class.js");
import * as asdf from "./class.js";

const p1 = new asdf.Person("p1","dorm","0");
const p2 = new asdf.Person("p2","dorm","1");
const p3 = new asdf.Person("p3","dorm","0");
const p4 = new asdf.Person("p4","dorm","1");

const p5 = new Person("p5","dorm","0");
const p6 = new Person("p6","dorm","0");
const p7 = new Person("p7","dorm","1");
const p8 = new Person("p6","dorm","0");
			
const sig = new Company("SIG", p1);

document.getElementById("asdf").addEventListener('click'.function())
{
	sig.printList();
}