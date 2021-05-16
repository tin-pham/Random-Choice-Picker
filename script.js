const textarea = document.querySelector('textarea');
const tagsEle = document.querySelector('.tags');
textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  // Add choice

  if (e.key === 'Enter') {
    // Clear the field
    e.target.value = '';

    // Randomize
    randomRun();
  }
});

function createTags(input) {
  let tags = input
    .split(',')
    .map((text) => text.trim())
    .filter((text) => text !== '');

  //   Clear first
  tagsEle.innerHTML = '';
  tags.forEach((text) => {
    let tag = document.createElement('span');

    tag.classList.add('tag');
    tag.innerText = text;
    tagsEle.appendChild(tag);
  });
}

function randomRun() {
  const times = 30;

  const intervalId = setInterval(() => {
    let randomTag = randomChoice();
    highLightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);

    setTimeout(() => {
      let randomTag = randomChoice();
      highLightTag(randomTag);
    }, 100);
  }, 100 * times);
}

function randomChoice() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
  tag.classList.add('highlight');
}

function unHighLightTag(tag) {
  tag.classList.remove('highlight');
}
