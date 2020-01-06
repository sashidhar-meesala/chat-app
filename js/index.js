const messages = JSON.parse(window.localStorage.getItem('messages')); // Array!!


const domBtnOthers = document.getElementById(`btnOthers`);
const domOthers = document.getElementById(`others`);
const domMessages = document.getElementById(`messages`);


domBtnOthers.addEventListener('click', event => {
  document.querySelector('.layout').classList.toggle('open');
});




// for each message we have, create one html <article> add to the document
/* messages.forEach( msg => {
  domMessages.innerHTML += `
  <article class="message from-me">
    <blockquote class="talk">${msg.text}</blockquote>
    <footer class="meta">Person Name <time timedate="2020-01-06">1 min ago</time></footer>
  </article>`;
}); */


const getMsgAsHtml = msg => {

  // let from = `from-them`;
  // if (msg.from.id === user.id) {
  //   from = `from-me`;
  // }

  return `
  <article class="message ${(msg.from.id === user.id) ? `from-me` : `from-them`}">
    <blockquote class="talk">${msg.text}</blockquote>
    <footer class="meta">${msg.from.name} <time timedate="2020-01-06">1 min ago</time></footer>
  </article>`;
}

domMessages.innerHTML = messages.map(getMsgAsHtml).join('\n');

