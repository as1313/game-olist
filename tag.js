// tag.js
const tags = [
  "전체", "싱글", "멀티", "협동", "RPG", "TRPG", "FPS", "TPS", "MOBA", "GOTY",
  "전략", "턴제", "탐험", "오픈월드", "액션", "퍼즐", "잠입", "요리", "생존",
  "생활", "카드", "인디", "픽셀", "예술", "귀여움", "캐주얼", "레트로", "비뎀업",
  "런앤건", "판타지", "어드벤처", "샌드박스", "로그라이트", "소울라이크",
  "메트로배니아", "배틀로얄", "루터슈터", "고난이도", "클리어", "아직안함",
  "하트", "하트눈", "노잼", "유튜브"
];

const tagContainer = document.getElementById("tagButtons");

tags.forEach(tag => {
  const button = document.createElement("button");
  button.textContent = tag;
  button.dataset.tag = tag;
  if (tag === "전체") {
    button.classList.add("selected");
  }
  tagContainer.appendChild(button);
});