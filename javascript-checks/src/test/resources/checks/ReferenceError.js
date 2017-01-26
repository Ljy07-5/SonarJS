function foo() {}

var a1;
foo(a1);

foo(a2);
var a2;

a3 = "";
foo(a3);
foo(a3.xxx)
{xxx: "property value"};

foo(x1); // Noncompliant {{"x1" does not exist. Change its name or declare it so that its usage doesn't result in a "ReferenceError".}}
//  ^^

a1 + x2; // Noncompliant
//   ^^

typeof x3; // OK
typeof x4.x; // Noncompliant
//     ^^

if (typeof x5 !== undefined) {
  foo(x5);
}

foo(let1); // Noncompliant [[id=let1]]
if (true) {
  let let1 = 42;
  foo(let1);
}
foo(let1);
//S ^^^^ let1

foo(undefined);

with (Object) {
  create;
}

function f1() {
  var a1;
  foo(a1);
  foo(x6); // Noncompliant
}

foo(String);
foo(window);
foo(document);
