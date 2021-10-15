const p1 = new Person("p1","dorm","0");
const p2 = new Person("p2","dorm","1");
const p3 = new Person("p3","dorm","0");
const p4 = new Person("p4","dorm","1");

const p5 = new Person("p5","dorm","0");
const p6 = new Person("p6","dorm","0");
const p7 = new Person("p7","dorm","1");
const p8 = new Person("p6","dorm","0");
			
const sig = new Company("SIG", p1);
			
sig.makeNewDorm(p5);
			
sig.insertLast(p2, 1);
sig.insertLast(p4, 1);
sig.insertAt(p3, 1, 3)
			
sig.insertLast(p6, 2);
sig.insertLast(p8, 2);
sig.insertAt(p7, 2, 3)
			
sig.printList(1);
sig.printList(2);
			
document.writeln("<br>");
			
var arr = sig.findPersonByType("1");
for(let i = 0; i < arr.length; i++)
{
	document.writeln(arr[i].getName() + " ");
}
document.writeln("<br>");
document.writeln(p1.getPos());
document.writeln("<br>");