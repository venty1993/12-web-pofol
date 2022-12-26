const content = 'FLOW';
const textLine = 5;

const flowChar = document.getElementsByClassName('flow-char');

for(element of flowChar) {
    for(let i = 0 ; i < textLine ; i ++ ){
        const charInner = document.createElement('div');
        charInner.classList.add('line');
        element.appendChild(charInner);
        for(let j = 0 ; j < 15 ; j ++){
            const flowTextContent = document.createElement('span');
            flowTextContent.textContent= content;
            charInner.appendChild(flowTextContent);
        }
    }
}