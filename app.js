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
    'I would love to insult you but I\'m afraid I won\'t do as well as nature did',
    'I would challenge you to a battle of wits but I see you\'re unarmed',
    'You do realize that makeup isn\'t going to fix your stupidity',
    'If I wanted to kill myself, I\'d climb your ego and jump to your IQ',
    'Your gene pool could use a little chlorine',
    'I guess those penis enlargement pills are working. You\'re twice the dick you were yesterday',
    'If you\'re going to be two-faced at least make sure one of them is pretty',
    'I\'d slap you, but that would be animal abuse',
    'Somewhere out there, a tree is tirelessly producing oxygen for you. I think you owe it an apology ',
    'You\'re so ugly, when your mum dropped you off at school she got a fine for littering',
    'You\'re fat and I\'m not gonna sugarcoat it because you\'ll eat that too',
    'Of course I talk like an idiot, how else would you understand me',
    'Everyone has the right to be stupid, but you\'re abusing your priviledge',
    'Keep rolling your eyes, maybe you\'ll find your brain back there',
    'I bet your brain feels as good as new seeing that you\'ve never used it',


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
    const reset =()=>{
        location.reload()
    }
   
    document.addEventListener("DOMContentLoaded", ()=>{
        const btn1= document.querySelector("#btn1")
    
        //ELEM.addEventListener(EVENT, CALLBACK)
        btn1.addEventListener("click", insult)

        const btn2= document.querySelector("#btn2")
        btn2.addEventListener("click", reset)
    })

    