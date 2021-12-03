var count = 0;
function checkVisitor() {
  if (!localStorage.getItem(count)) {
    setName();
  } else {
    getName();
  }
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
