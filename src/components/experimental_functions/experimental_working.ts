
//This is a working version of the typing emulator, basicalli writes the text not in a single bloc
//but letter by letter, with a delay between each letter thus emulating a human typing, this is only
//for giving the idea its a human typing, not a bot, JUST FOR A BETTER EXPERIENCE AND FEELING not usefull

function emulateTyping(inputString: string) {
    let index = 0;
    let speed = 1
  
    const interval = setInterval(() => {
      if (index < inputString.length) {
        const partialString = inputString.slice(0, index + 1);
        setTyped(partialString);
        scrolltoBottomInstant()
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed); // Adjust the interval (in milliseconds) to control the typing speed


    function scrolltoBottomInstant(){
      const messageContainer = document.querySelector('.message-container') as HTMLDivElement | null;
      if (!messageContainer) return
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight + 200,
        left: 0
      });
    }
  }