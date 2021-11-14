var p0 = new Person("황상윤", 0, 1, "행정반")
var p1 = new Person("강경주", 0, 1, "행정반")
var p2 = new Person("추민선", 1, 0, "생활관")
var p3 = new Person("허예지", 1, 0, "근무")
var p4 = new Person("전영철", 1, 0, "생활관")
var p5 = new Person("조만수", 1, 0, "휴가")
var p6 = new Person("유승희", 2, 0, "생활관")
var p7 = new Person("전은하", 2, 0, "생활관")
var p8 = new Person("장혜연", 2, 0, "집가고싶다")
var p9 = new Person("오경환", 2, 0, "생활관")
var p10 = new Person("윤홍식", 3, 0, "생활관")
var p11 = new Person("남해주", 3, 0, "으아아")
var p12 = new Person("임기연", 3, 0, "생활관")
var p13 = new Person("유혜연", 3, 0, "살려줘")
var p14 = new Person("윤식홍", 4, 0, "생활관")
var p15 = new Person("해남주", 4, 0, "으아아")
var p16 = new Person("임연기", 4, 0, "생활관")
var p17 = new Person("유연혜", 4, 0, "살려줘")

var sig = new Company("XX중대", "sig", p0); // 0
sig.makeNewDorm(p2); // 1
sig.makeNewDorm(p6); // 2
sig.makeNewDorm(p10); // 3

sig.insertLast(p1, 0);
sig.insertLast(p3, 1);
sig.insertLast(p4, 1);
sig.insertLast(p5, 1);
sig.insertLast(p7, 2);
sig.insertLast(p8, 2);
sig.insertLast(p9, 2);
sig.insertLast(p11, 3);
sig.insertLast(p12, 3);
sig.insertLast(p13, 3);

var p20 = new Person("황상윤", 0, 1, "행정반")
var p21 = new Person("강경주", 0, 1, "행정반")
var p22 = new Person("추민선", 1, 0, "생활관")
var p23 = new Person("허예지", 1, 0, "근무")
var p24 = new Person("전영철", 1, 0, "생활관")
var p25 = new Person("조만수", 1, 0, "휴가")
var p26 = new Person("유승희", 2, 0, "생활관")
var p27 = new Person("전은하", 2, 0, "생활관")
var p28 = new Person("장혜연", 2, 0, "집가고싶다")
var p29 = new Person("오경환", 2, 0, "생활관")
var p30 = new Person("윤홍식", 3, 0, "생활관")
var p31 = new Person("남해주", 3, 0, "으아아")
var p32 = new Person("임기연", 3, 0, "생활관")
var p33 = new Person("유혜연", 3, 0, "살려줘")
var p34 = new Person("윤식홍", 4, 0, "생활관")
var p35 = new Person("해남주", 4, 0, "으아아")
var p36 = new Person("임연기", 4, 0, "생활관")
var p37 = new Person("유연혜", 4, 0, "살려줘")

var c2 = new Company("YY중대", "c2", p20);
c2.makeNewDorm(p22); // 1
c2.makeNewDorm(p26); // 2
c2.makeNewDorm(p30); // 3
c2.makeNewDorm(p34);

c2.insertLast(p21, 0);
c2.insertLast(p23, 1);
c2.insertLast(p24, 1);
c2.insertLast(p25, 1);
c2.insertLast(p27, 2);
c2.insertLast(p28, 2);
c2.insertLast(p29, 2);
c2.insertLast(p31, 3);
c2.insertLast(p32, 3);
c2.insertLast(p33, 3);
c2.insertLast(p35, 4);
c2.insertLast(p36, 4);
c2.insertLast(p37, 4);