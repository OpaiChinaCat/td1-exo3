input.onButtonPressed(Button.A, function () {
    if (nb < 10) {
        nb += 1
        basic.showNumber(nb)
    } else {
        nb = 1
        basic.showNumber(nb)
    }
})
let nb = 0
nb = 1
basic.showNumber(nb)
