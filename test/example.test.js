// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCandy } from '../utils.js';
import { candies } from '../candies.js';

const test = QUnit.test;

test('test candy render function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="candy"><h1>M&amp;Ms</h1><img src="./assets/mms-candies.png"><p>M&amp;M are delicious and cost $3.99, ,they rank 2 on my top 5.</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCandy(candies[0]);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
