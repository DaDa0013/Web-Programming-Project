// 코로나 바이러스 방역 미니게임

// 바이러스 그림을 눌렀을 때 크기가 천천히 줄어들 수 있도록 delay를 걸어주는 함수
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// 바이러스 그림을 눌렀을 때 발생하는 함수들로, 바이러스 그림의 크기가 점점 줄어들어 없어지도록 함
async function Catch1() {
  let virus = document.getElementById("virus1");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
async function Catch2() {
  let virus = document.getElementById("virus2");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
async function Catch3() {
  let virus = document.getElementById("virus3");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
async function Catch4() {
  let virus = document.getElementById("virus4");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
async function Catch5() {
  let virus = document.getElementById("virus5");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
async function Catch6() {
  let virus = document.getElementById("virus6");
  let SIZE = 70;
  while (SIZE >= 0) {
    await sleep(100).then(() => {
      virus.style.width = `${SIZE}px`;
      virus.style.height = `${SIZE}px`;
    });
    SIZE -= 5;
  }
}
