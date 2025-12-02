function aleatorio(n){
    numero = Math.floor(Math.random() * n)+1
    document.getElementById('aleatorio').innerHTML = '+ '+numero+'$'
}
aleatorio(12500)

audio = document.getElementById('audio')
audio.volume = 0.2
audio.play()