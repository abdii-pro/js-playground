function greeting() {
    const h1 = document.createElement('h1')
    h1.innerText = 'Hello, welcome to JS Playground!'
    h1.setAttribute('id', 'dom')
    h1.setAttribute('class', 'dom1')
    h1.setAttribute('OnClick', 'handleClicks()')
    const h2 = document.querySelector('h2');
    document.body.insertBefore(h1, h2);
}
function changeText() {
    var h2 = document.querySelector('h2'); // find the <h2>

    var input = document.createElement('input');
    input.setAttribute('type', 'text');

    document.body.appendChild(input);

    input.addEventListener('input', function () {
        h2.innerText = input.value; // update <h2> text live
    });
}