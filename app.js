// Watch for input and update count display
const text = document.getElementById('text');
text.addEventListener('input', handleInput);

function handleInput(event) {
  const content = event.target.value;
  // Just pass zeros if content is empty
  if (!content.trim()) displayCount({ words: 0, chars: 0 });
  // Calculate character and word count
  const chars = content.length;
  const words = content.split(' ').filter(item => item.length > 0).length;
  // Update count display
  displayCount({ words, chars });
}

function displayCount({ words, chars }) {
  const wordCount = document.querySelector('#word-count .value');
  const charCount = document.querySelector('#char-count .value');
  wordCount.textContent = words || '';
  charCount.textContent = chars || '';
}
