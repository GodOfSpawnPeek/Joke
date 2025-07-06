const number = document.getElementById('number')
const inputDisp = document.getElementById('input_display')
const sound = new Audio()
sound.src = "fart-with-extra-reverb.mp3"
const sound2 = new Audio()
sound2.src = 'fart-meme-sound.mp3'

number.addEventListener('input', (e)=>{
    let num = e.target.value
    count(num)
})

function count(e){
    let num = e
    if(num <= 22){
        inputDisp.innerHTML = "Результат:" + num;
    }else{
        let pivot = 0
        num = num.toString()
        for(word of num){
            pivot += parseInt(word)
        }
        if(pivot > 22) {
            count(pivot)
        }else{
            inputDisp.innerHTML = "Результат:" + pivot;
        }
    }
}

number.addEventListener('keydown',(e)=>{
    if(e.key === 'Backspace'){
        sound2.loop = true   
        sound2.currentTime = 0
        sound2.play()
        setTimeout(()=>{
            sound.play()
        },1)
    }else{
        sound2.loop = false
    sound.pause()
    sound.currentTime = 0
    // sound.play()
    setTimeout(()=>{
        sound.play()
    },1)
    }
})