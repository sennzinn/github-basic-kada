// btnのHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});