    let insultArray = [
    'Stick it where the sun don\'t shine',
    'You should introduce your upper lip to your lower lip sometime & shut up',
    'Your nose is like a stupid marmot',
    'You are proof that God has a sense of humor',
    'I was wondering how you comb your hair so the horns don\'t show',
    'If I wanted to hear from an asshole, I would have farted',
    'If you ran like your mouth you\'d be in good shape',
    'Your ass must get jealous of all the shit that comes out of your mouth',
    'You\'re so dense light bends around you',
    
    ]
    
    let randomInsult= ''
    

    //Create a paragraph where the  randomly created insult will show

    const paragraph= document.querySelector('.insult')
    
    document.body.appendChild(paragraph)

    //create a function that will change the insult shown on screen when button is clicked
    
    const insult =()=>{
        randomInsult= insultArray[Math.floor(Math.random()* insultArray.length)]
        paragraph.innerText= randomInsult

    }
   
    document.addEventListener("DOMContentLoaded", ()=>{
        const btn= document.querySelector("#btn")
    
        //ELEM.addEventListener(EVENT, CALLBACK)
        btn.addEventListener("click", insult)
    })

    