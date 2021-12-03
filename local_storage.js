function visit() {
  var now = new Date();
  var visit_date = document.getElementById("visit_date");
  var string =
    now.getMonth() +
    1 +
    "월 " +
    now.getDate() +
    "일 " +
    now.getHours() +
    "시 " +
    now.getMinutes() +
    "분 " +
    now.getSeconds() +
    "초";
  visit_date.innerHTML = string;
}
// 로컬 스토리지
var count = 0;
function checkVisitor() {
  if (!localStorage.getItem(count)) {
    setName();
  } else {
    getName();
  }
  visit();
}

function setName() {
  let name = prompt("이름 입력: ");
  if (!name) {
    name = "방문자";
  }
  localStorage.setItem(count, name);
  let hello = document.getElementById("hello");
  hello.innerHTML = name;
}

function getName() {
  let name = localStorage.getItem(count);

  let hello = document.getElementById("hello");
  hello.innerHTML = name;
}
