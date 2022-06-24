const allQuotes = [
	        [`"One day, you'll leave this world behind So live a life you will remember."`,"-By Avicii: The Nights"],
	        [`"Let your life lightly dance on the edges of Time like dew on the tip of a leaf."`,"-By Rabindranath Tagore"],
	        [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,"-By Albert Einstein"],
	        [`"The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science."`,"-By Albert Einstein"],
	        [`"It is our choices, Harry, that show what we truly are, far more than our abilities."`,"-By J.K. Rowling"],
	        [`"All men who have turned out worth anything have had the chief hand in their own education."`,"-By Walter Scott"],
	        [`"Don’t limit a child to your own learning, for he was born in another time."`,"-By Rabindranath Tagore"],
	        [`"Even if you are not ready for the day, it cannot always be night"`,"-By Kanye West"],
	        [`"The world, like a dream full of attachments and aversions seems real until the awakening."`,"-By Adi Shankara"],
	        [`"You only live once, but if you do it right, once is enough."`,"-By Mae West"],
          [`"Wherever you go becomes a part of you somehow."`,"-By Anita Desai"],
	        [`"Do not take life too seriously. You will never get out of it alive."`,"-By Elbert Hubbard"]  
        ]

var colors = [
	'rgb(248, 142, 142)',
	'#BD1550',
	'#E97F02',
	'#F8CA00',
	'#8A9B0F',
  '#69D2E7',
	'#FA6900',
	'#16a085',
	'#27ae60',
	'rgb(63, 221, 48)',
	'#f39c12',
	'#e74c3c',
	'#9b59b6',
	'#FB6964',
	'#008080',
	'orange',
	'#77B1A9',
	'#73A857'
	];

/*random quotes*/
let randomNo =  Math.floor(Math.random() * 12);
document.getElementById("quote").innerHTML = allQuotes[randomNo][0];
document.getElementById("quoteBy").innerHTML = allQuotes[randomNo][1];

/*background color*/
let randomColor =  Math.floor(Math.random() * 18);
document.body.style.backgroundColor = colors[randomColor];

 /*button color*/
const btn = document.getElementById('btn');
btn.style.backgroundColor = colors[randomColor];
btn.style.border = colors[randomColor];
btn.style.color = 'white';

/*quote text color*/
const quote = document.getElementById('quote');
const quoteBy = document.getElementById('quoteBy');
quote.style.color = colors[randomColor];
quoteBy.style.color = colors[randomColor];

function newQuote(){ 
  /*random quotes*/
  let randomNo =  Math.floor(Math.random() * 12);
  document.getElementById("quote").innerHTML = allQuotes[randomNo][0];
  document.getElementById("quoteBy").innerHTML = allQuotes[randomNo][1];

  /*background-color*/
  let randomColor =  Math.floor(Math.random() * 18);
  document.body.style.backgroundColor = colors[randomColor];
  console.log(colors[randomColor])

  /*button-color*/
  const btn = document.getElementById('btn');
  btn.style.backgroundColor = colors[randomColor];
  btn.style.border = colors[randomColor];
  btn.style.color = 'white';

  /*quote text color*/
  const quote = document.getElementById('quote');
  const quoteBy = document.getElementById('quoteBy');
  quote.style.color = colors[randomColor];
  quoteBy.style.color = colors[randomColor];
  }

const date = new Date();
let hour = date.getHours();
if(hour>=0 && hour<12){
  document.getElementById("timeOfDay").innerHTML = "Lets start our morning with a new quote"
  }
else if(hour>=12 && hour<18){
  document.getElementById("timeOfDay").innerHTML = "Lets start our afternoon with a new quote"
  }
else{
  document.getElementById("timeOfDay").innerHTML = "Lets start our evening with a new quote"
  }
