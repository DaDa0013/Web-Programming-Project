var count = 1;

// 글을 작성했을 때 각 개체의 id를 구분할 수 있도록 수를 세는 함수
function plusCount() {
  count++;
}

//글을 작성할 수 있게하는 함수로, 글을 쓸 수 있는 textarea와 글을 저장할 수 있는 저장버튼을 생성
function addTip() {
  let parent = document.getElementById("tipList");

  let Block = document.createElement("div");
  Block.id = `Block${count}`;
  Block.className = "Block";

  let container = document.createElement("div");
  container.id = `container${count}`;
  container.className = "container";

  let inputContent = document.createElement("textarea");
  inputContent.id = `content${count}`;

  let saveButton = document.createElement("input");
  saveButton.type = "button";
  saveButton.value = "저장";
  saveButton.id = `saveButton${count}`;
  saveButton.className = "tipButton";
  let num = String(count);
  saveButton.addEventListener("click", function () {
    initialSaveTip(num);
  });

  parent.appendChild(Block);
  Block.appendChild(container);

  container.appendChild(inputContent);
  container.appendChild(saveButton);

  plusCount();
}

// 글이 처음 저장되었을 때 수정과 삭제, 공감 버튼이 나오도록 하는 함수
function initialSaveTip(num) {
  let Block = document.getElementById(`Block${num}`);
  let container = document.getElementById(`container${num}`);
  let inputContent = document.getElementById(`content${num}`);
  let saveButton = document.getElementById(`saveButton${num}`);

  let content = document.createElement("p");
  content.id = inputContent.id;
  content.innerHTML = inputContent.value;

  let editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "수정";
  editButton.id = `editButton${num}`;
  editButton.className = "tipButton";
  editButton.addEventListener("click", function () {
    editTip(num);
  });

  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "삭제";
  deleteButton.id = `deleteButton${num}`;
  deleteButton.className = "tipButton";
  deleteButton.addEventListener("click", function () {
    deleteTip(Block);
  });

  let like = document.createElement("div");
  like.id = `like${num}`;
  like.className = "like";

  let likeButton = document.createElement("input");
  likeButton.type = "image";
  likeButton.src = "/images/like.png";
  likeButton.id = `likeButton${num}`;
  likeButton.addEventListener("click", function () {
    likeUp(num);
  });

  let likeCount = document.createElement("p");
  likeCount.id = `likeCount${num}`;
  likeCount.innerHTML = "0";

  like.appendChild(likeButton);
  like.appendChild(likeCount);

  container.removeChild(inputContent);
  container.removeChild(saveButton);

  container.appendChild(content);
  container.appendChild(editButton);
  container.appendChild(deleteButton);
  container.appendChild(like);
}

// 수정버튼이 눌렸을 때 실행하는 함수로, 글을 수정할 수 있게 저장 전의 상태로 만듦
function editTip(num) {
  let container = document.getElementById(`container${num}`);
  let content = document.getElementById(`content${num}`);
  let editButton = document.getElementById(`editButton${num}`);
  let deleteButton = document.getElementById(`deleteButton${num}`);
  let like = document.getElementById(`like${num}`);

  let inputContent = document.createElement("textarea");
  inputContent.id = `content${num}`;
  inputContent.value = content.innerHTML;

  let saveButton = document.createElement("input");
  saveButton.type = "button";
  saveButton.value = "저장";
  saveButton.id = `saveButton${num}`;
  saveButton.className = "tipButton";
  saveButton.addEventListener("click", function () {
    saveTip(num, like);
  });

  container.removeChild(content);
  container.removeChild(editButton);
  container.removeChild(deleteButton);
  container.removeChild(like);

  container.appendChild(inputContent);
  container.appendChild(saveButton);
}

//수정버튼을 눌러 글을 수정하고 다시 저장할 떄 사용되는 함수로, 똑같이 글을 저장하고 수정, 삭제, 공감 버튼이 생기도록 함
function saveTip(num, like) {
  let Block = document.getElementById(`Block${num}`);
  let container = document.getElementById(`container${num}`);
  let inputContent = document.getElementById(`content${num}`);
  let saveButton = document.getElementById(`saveButton${num}`);

  let content = document.createElement("p");
  content.id = inputContent.id;
  content.innerHTML = inputContent.value;

  let editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "수정";
  editButton.id = `editButton${num}`;
  editButton.className = "tipButton";
  editButton.addEventListener("click", function () {
    editTip(num);
  });

  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "삭제";
  deleteButton.id = `deleteButton${num}`;
  deleteButton.className = "tipButton";
  deleteButton.addEventListener("click", function () {
    deleteTip(Block);
  });

  container.removeChild(inputContent);
  container.removeChild(saveButton);

  container.appendChild(content);
  container.appendChild(editButton);
  container.appendChild(deleteButton);
  container.appendChild(like);
}

//글을 삭제할 때 사용하는 함수
function deleteTip(Block) {
  let parent = document.getElementById("tipList");
  parent.removeChild(Block);
}

//공감버튼을 눌렀을 때 숫자가 올라도록 하는 함수
function likeUp(num) {
  let likeCount = document.getElementById(`likeCount${num}`);
  let count = Number(likeCount.innerHTML);
  count++;
  likeCount.innerHTML = String(count);
}
