let count = 0;

function increment() {
  count++;
  document.getElementById('counter-display').textContent =
    `Clicked ${count} time${count === 1 ? '' : 's'}`;
}
