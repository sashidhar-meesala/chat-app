const user = {
   id: 456,
   name: 'Charles Babbage',
   img: 'img/456.jpg'
}

const messages = [
   {
      id: 1,
      from: {
         id: 123,
         name: 'Ada Lovelace',
         img: 'img/123.jpg'
      },
      time: {
         date: 1,
         month: 8,
         year: 1843,
         hour: 14,
         minute: 59
      },
      text: `You should check out this little script I just wrote. 😂 lol`
   }, {
      id: 2,
      from: {
         id: 456,
         name: 'Charles Babbage',
         img: 'img/456.jpg'
      },
      time: {
         date: 1,
         month: 8,
         year: 1843,
         hour: 15,
         minute: 03
      },
      text: `Can't wait to see it.`
   }
]

window.localStorage.setItem( 'messages', JSON.stringify(messages) );