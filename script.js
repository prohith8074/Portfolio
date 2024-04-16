
// ---------------cursur above+------------------
const typingAnimationElement = document.getElementById('typing-animation');

						// Create an array of typing text
const typingTexts = [
'Student  ',
'pROGRAMMER ',

];

// Create a function to display the typing animation for a given text
function playTypingAnimation(text) {
// Loop through each character and add it to the element
for (let i = 0; i < text.length; i++) {
	setTimeout(() => {
	typingAnimationElement.textContent += text[i];
	}, i * 200); // Increase the delay to slow down the typing animation
}

// Once the animation is complete, reset the text and start over
setTimeout(() => {
	typingAnimationElement.textContent = '';
	playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
}, text.length * 200);
}
// Start the typing animation loop
playTypingAnimation(typingTexts[0]);


LottieInteractivity.create({
    player: "#eleventhLottie",
    mode: "cursor",
    actions: [
      {
        type: "toggle"
      }
    ]
  })

//   let btn=document.getElementById('btn');
//   btn.addEventListener()
function fun(){
    const newPageTitle = 'The title has changed!';
  document.querySelector('title').textContent = newPageTitle;
    window.location.href='https://rohiths-stunning-site-071-8552a67ec342b.webflow.io/';
}

function aboutme(){
  window.open('aboutme.html');
}