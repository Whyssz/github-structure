'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ds',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try {
    data.forEach((blockObj, index) => {
        const block = document.createElement(blockObj.tag);
        
        if (!blockObj.id) throw new SyntaxError(`SyntaxError - empty identificator ${index + 1}`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else throw e;
}