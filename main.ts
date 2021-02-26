function encrypt (text: string) {
    cmsg = ""
    for (let index = 0; index <= text.length - 1; index++) {
        chr = text.charAt(index)
        cmsg = "" + cmsg + (" " + morse[alphabet.indexOf(chr)])
    }
    return cmsg
}
function playCode (text: string) {
    for (let index = 0; index <= text.length; index++) {
        chr = text.charAt(index)
        if (chr == ".") {
            music.playTone(523, music.beat(BeatFraction.Eighth))
        }
        if (chr == "-") {
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    msg = Verses.shift()
    Verses.push(msg)
    basic.showString("" + (msg))
})
input.onButtonPressed(Button.AB, function () {
    encrypt(msg)
    playCode(cmsg)
})
input.onButtonPressed(Button.B, function () {
    encrypt(msg)
    basic.showString("" + (cmsg))
})
let chr = ""
let cmsg = ""
let alphabet: string[] = []
let morse: string[] = []
let msg = ""
let Verses: string[] = []
let j316 = "for god so loved the world"
let P23 = "the lord is my shepherd"
let Phl4 = "i can do all things"
Verses = [Phl4, P23, j316]
msg = j316
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "/"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "]
let Word = ""
let Cword = ""
let code = ""
