function encrypt (text: string) {
    cmsg = ""
    for (let index = 0; index <= text.length - 1; index++) {
        chr = text.charAt(index)
        if (chr != "") {
            cmsg = "" + cmsg + (" " + morse[alphabet.indexOf(chr)])
        }
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
input.onButtonPressed(Button.B, function () {
    encrypt(msg)
    basic.showString(cmsg)
    playCode(cmsg)
})
let chr = ""
let cmsg = ""
let alphabet: string[] = []
let morse: string[] = []
let msg = ""
let j316 = "for god so loved the world"
msg = j316
let Word = ""
let Cword = ""
let code = ""
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
