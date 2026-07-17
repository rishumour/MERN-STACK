const box = document.querySelector('#box');

box.addEventListener('click', (e) => {
  console.log('Clicked at:', e.clientX, e.clientY);
  if (e.button === 0) console.log('Left click');
  if (e.ctrlKey) console.log('Ctrl held');
});

box.addEventListener('mouseenter', () => {
  console.log('Mouse entered box');
});

box.addEventListener('mousemove', (e) => {
  console.log('Mouse at:', e.pageX, e.pageY);
});