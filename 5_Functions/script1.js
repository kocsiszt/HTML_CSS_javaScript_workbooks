'use strict';


const poll = {
    question: 'What is your favorit programming leanguage?',
    options: ['0: JavaScript', '1: Python', '2: Ruby', '3: C++'],
    // This generates [0,0,0,0]. MOre in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

        this.displayResult();
        this.displayResult('string');

        //console.log(this.answers);
    },
    displayResult(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            // Pol results are 3,2,4,1
            console.log(`Polls results are ${this.answers.join(', ')}`);
        }
    }
};
//poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));






