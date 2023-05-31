function randomFrasierQuote() {

    let randomNumber = Math.floor(Math.random() * 8);
    let quote = '';

    quote = randomNumber;

    switch (quote) {
      case 0:
        alert(`Frasier: "Dad? I thought we had an agreement. Eddie doesn't roll around on my sofa and I don't throw him in front of a bus."`);
        break;
      case 1:
        alert(`Frasier: "It may be an unwise man who doesn't learn from his own mistakes, but it's an absolute idiot that doesn't learn from other people's."`);
        break;
      case 2:
        alert(`Frasier: "As we speak, hordes of viral Visigoths are hurling themselves over the battlements of my immune system, laying waste to my…Oh, dear God, you see how weak I am? I can't even finish a simple Visigoth metaphor."`);
        break;
      case 3:
        alert(`Frasier: "She told me that my show was bourgeois. I then argued that anything that has mass appeal could be called bourgeois. She then said that my argument was bourgeois...which I happened to find jejune."`);
        break;
      case 4:
        alert(`Frasier: "I cut myself because I was shaving without water, and why was there no water? Because I had to move your chair, which gouged the floor which made me call for Joe, who found bad pipes which called for Cecil, who ate the cat who killed the rat that lived in the house that Frasier built!"`);
        break;
      case 5:
        alert(`Frasier: "I will not have you turning a minor, albeit annoying situation into a Martin Scorsese film!"`);
        break;
      case 6:
        alert(`Frasier: "Sometimes the best apology is the truth."`);
        break;
      case 7:
        alert(`Frasier: "For eleven years you've heard me say, 'I’m listening.' Well, you were listening, too. And for that I am eternally grateful. Goodnight, Seattle."`);
        break;
      default:
      alert(`I'm listening...`)
      break
    }
}


