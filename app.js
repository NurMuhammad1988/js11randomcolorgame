

var color = ['red', 'black', 'yellow', 'white', 'blue', 'grean'];
var rand = Math.floor(Math.random() * color.length);
var randColor = color[rand];
var maxAttempt = prompt('Nechta urunish hohlaysiz');//inputdan olinganda kerak//

console.log(randColor);

// document.write(randColor);

var i = 0;

while (i < maxAttempt) {
    i++;
    let answer = prompt('Rangni toping 3 Urunish' + i);
    answer = answer.toLocaleLowerCase();

    console.log(answer);

    if (answer == null) {
        break;
    }

    else if (answer != randColor) {
        continue;
    }

    else {
        document.write('Tabriklaymiz siz yutdingiz');
        break;
    }
}

document.write('O`yin tugadi')