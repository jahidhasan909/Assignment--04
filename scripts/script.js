
const jobDetailsCard = document.getElementById('job-detailes-card');



const totalJob = document.getElementById('total');
totalJob.innerText = jobDetailsCard.children.length;

const secondTotal = document.getElementById('2total');
secondTotal.innerText = jobDetailsCard.children.length;




// job card 1
document.getElementById('first-interview-btn').addEventListener('click', function () {

    const card1 = document.getElementById('card1');
    StatusControl(card1, 'interview')

    const firstIn = document.getElementById('first-interview-btn');
    firstIn.disabled = true;
    const firstRe = document.getElementById('first-rejected-btn');
    firstRe.disabled = true;

    // const copyInterHtmlS = card1.innerHTML
    // const newDivs = document.createElement('div')
    // newDivs.innerHTML = copyInterHtmlS;

    const newDiv = card1.cloneNode(true);
    buttonControl(newDiv, 'interview');

    newDiv.querySelector('#first-rejected-btn').addEventListener('click', function () {
        transferCard(newDiv, 'rejected-section');

    })
    newDiv.querySelector('#first-interview-btn').addEventListener('click', function () {
        transferCard(newDiv, 'interview-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();
})


document.getElementById('first-rejected-btn').addEventListener('click', function () {
    const cardS = document.getElementById('card1');
    StatusControl(cardS, 'rejected');

    const firstIn = document.getElementById('first-interview-btn');
    firstIn.disabled = true;
    const firstRe = document.getElementById('first-rejected-btn');
    firstRe.disabled = true;

    // const copyInterHtml = card1.innerHTML;
    // const newDiv = document.createElement('div');
    // newDiv.innerHTML = copyInterHtml;

    const newDivs = cardS.cloneNode(true);
    buttonControl(newDivs, 'rejected');

    newDivs.querySelector('#first-interview-btn').addEventListener('click', function () {
        transferCard(newDivs, 'interview-section');

    })
    newDivs.querySelector('#first-rejected-btn').addEventListener('click', function () {
        transferCard(newDivs, 'rejected-section');

    })

    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDivs);
    updateCount();

})




// job card 2
document.getElementById('second-interview-btn').addEventListener('click', function () {
    const card2 = document.getElementById('card2');
    StatusControl2(card2, 'interview')

    const secondIn = document.getElementById('second-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('second-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card2.cloneNode(true);
    buttonControl2(newDiv, 'interview');

    newDiv.querySelector('#second-interview-btn').addEventListener('click', function () {
        transferCard2(newDiv, 'interview-section');

    })
    newDiv.querySelector('#second-rejected-btn').addEventListener('click', function () {
        transferCard2(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();


})

document.getElementById('second-rejected-btn').addEventListener('click', function () {
    const card2 = document.getElementById('card2');
    StatusControl2(card2, 'rejected');

    const secondIn = document.getElementById('second-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('second-rejected-btn');
    secondRe.disabled = true;


    // const copyInterHtml = card1.innerHTML;
    // const newDiv = document.createElement('div');
    // newDiv.innerHTML = copyInterHtml;

    const newDivs = card2.cloneNode(true);
    buttonControl2(newDivs, 'rejected');

    newDivs.querySelector('#second-interview-btn').addEventListener('click', function () {
        transferCard2(newDivs, 'interview-section');

    })
    newDivs.querySelector('#second-rejected-btn').addEventListener('click', function () {
        transferCard2(newDivs, 'rejected-section');

    })

    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDivs);
    updateCount();


})



// job card 3

document.getElementById('third-interview-btn').addEventListener('click', function () {
    const card3 = document.getElementById('card3');
    StatusControl3(card3, 'interview')

    const secondIn = document.getElementById('third-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('third-rejected-btn');
    secondRe.disabled = true;


    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml

    const newDiv = card3.cloneNode(true);
    buttonControl3(newDiv, 'interview');

    newDiv.querySelector('#third-interview-btn').addEventListener('click', function () {
        transferCard3(newDiv, 'interview-section');

    })
    newDiv.querySelector('#third-rejected-btn').addEventListener('click', function () {
        transferCard3(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();




})

document.getElementById('third-rejected-btn').addEventListener('click', function () {
    const card3 = document.getElementById('card3');
    StatusControl3(card3, 'rejected')

    const secondIn = document.getElementById('third-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('third-rejected-btn');
    secondRe.disabled = true;


    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml

    const newDiv = card3.cloneNode(true);
    buttonControl3(newDiv, 'rejected');

    newDiv.querySelector('#third-interview-btn').addEventListener('click', function () {
        transferCard3(newDiv, 'interview-section');

    })
    newDiv.querySelector('#third-rejected-btn').addEventListener('click', function () {
        transferCard3(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();




})






// job card 4

document.getElementById('four-interview-btn').addEventListener('click', function () {
    const card4 = document.getElementById('card4');
    StatusControl4(card4, 'interview')


    const secondIn = document.getElementById('four-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('four-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card4.cloneNode(true);
    buttonControl4(newDiv, 'interview');

    newDiv.querySelector('#four-interview-btn').addEventListener('click', function () {
        transferCard4(newDiv, 'interview-section');

    })
    newDiv.querySelector('#four-rejected-btn').addEventListener('click', function () {
        transferCard4(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})

document.getElementById('four-rejected-btn').addEventListener('click', function () {
    const card4 = document.getElementById('card4');
    StatusControl4(card4, 'rejected')


    const secondIn = document.getElementById('four-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('four-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card4.cloneNode(true);
    buttonControl4(newDiv, 'rejected');

    newDiv.querySelector('#four-interview-btn').addEventListener('click', function () {
        transferCard4(newDiv, 'interview-section');

    })
    newDiv.querySelector('#four-rejected-btn').addEventListener('click', function () {
        transferCard4(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})






// job card 5
document.getElementById('five-interview-btn').addEventListener('click', function () {
    const card5 = document.getElementById('card5');
    StatusControl5(card5, 'interview')


    const secondIn = document.getElementById('five-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('five-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card5.cloneNode(true);
    buttonControl5(newDiv, 'interview');

    newDiv.querySelector('#five-interview-btn').addEventListener('click', function () {
        transferCard5(newDiv, 'interview-section');

    })
    newDiv.querySelector('#five-rejected-btn').addEventListener('click', function () {
        transferCard5(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})

document.getElementById('five-rejected-btn').addEventListener('click', function () {
    const card5 = document.getElementById('card5');
    StatusControl5(card5, 'rejected')


    const secondIn = document.getElementById('five-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('five-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card5.cloneNode(true);
    buttonControl5(newDiv, 'rejected');

    newDiv.querySelector('#five-interview-btn').addEventListener('click', function () {
        transferCard5(newDiv, 'interview-section');

    })
    newDiv.querySelector('#five-rejected-btn').addEventListener('click', function () {
        transferCard5(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();


})







// job card 6
document.getElementById('six-interview-btn').addEventListener('click', function () {
    const card6 = document.getElementById('card6');
    StatusControl6(card6, 'interview')

    const secondIn = document.getElementById('six-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('six-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card6.cloneNode(true);
    buttonControl6(newDiv, 'interview');

    newDiv.querySelector('#six-interview-btn').addEventListener('click', function () {
        transferCard6(newDiv, 'interview-section');

    })
    newDiv.querySelector('#six-rejected-btn').addEventListener('click', function () {
        transferCard6(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})

document.getElementById('six-rejected-btn').addEventListener('click', function () {
    const card6 = document.getElementById('card6');
    StatusControl6(card6, 'rejected')

    const secondIn = document.getElementById('six-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('six-rejected-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card6.cloneNode(true);
    buttonControl6(newDiv, 'rejected');

    newDiv.querySelector('#six-interview-btn').addEventListener('click', function () {
        transferCard6(newDiv, 'interview-section');

    })
    newDiv.querySelector('#six-rejected-btn').addEventListener('click', function () {
        transferCard6(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})





// job card 7

document.getElementById('seven-interview-btn').addEventListener('click', function () {
    const card7 = document.getElementById('card7');
    StatusControl7(card7, 'interview')


    const secondIn = document.getElementById('seven-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('seven-rejected-btn');
    secondRe.disabled = true;

    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card7.cloneNode(true);
    buttonControl7(newDiv, 'interview');

    newDiv.querySelector('#seven-interview-btn').addEventListener('click', function () {
        transferCard7(newDiv, 'interview-section');

    })
    newDiv.querySelector('#seven-rejected-btn').addEventListener('click', function () {
        transferCard7(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})

document.getElementById('seven-rejected-btn').addEventListener('click', function () {
    const card7 = document.getElementById('card7');
    StatusControl7(card7, 'rejected')


    const secondIn = document.getElementById('seven-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('seven-rejected-btn');
    secondRe.disabled = true;

    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card7.cloneNode(true);
    buttonControl7(newDiv, 'rejected');

    newDiv.querySelector('#seven-interview-btn').addEventListener('click', function () {
        transferCard7(newDiv, 'interview-section');

    })
    newDiv.querySelector('#seven-rejected-btn').addEventListener('click', function () {
        transferCard7(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();
})

// job card 8

document.getElementById('eight-interview-btn').addEventListener('click', function () {
    const card8 = document.getElementById('card8');
    StatusControl8(card8, 'interview')
    const secondIn = document.getElementById('eight-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('eight-interview-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card8.cloneNode(true);
    buttonControl8(newDiv, 'interview');

    newDiv.querySelector('#eight-interview-btn').addEventListener('click', function () {
        transferCard8(newDiv, 'interview-section');

    })
    newDiv.querySelector('#eight-rejected-btn').addEventListener('click', function () {
        transferCard8(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})

document.getElementById('eight-rejected-btn').addEventListener('click', function () {
    const card8 = document.getElementById('card8');
    StatusControl8(card8, 'rejected')
    const secondIn = document.getElementById('eight-interview-btn');
    secondIn.disabled = true;
    const secondRe = document.getElementById('eight-interview-btn');
    secondRe.disabled = true;



    // const copyInterHtml = card2.innerHTML;
    // const newDiv = document.createElement('div')
    // newDiv.innerHTML = copyInterHtml


    const newDiv = card8.cloneNode(true);
    buttonControl8(newDiv, 'rejected');

    newDiv.querySelector('#eight-interview-btn').addEventListener('click', function () {
        transferCard8(newDiv, 'interview-section');

    })
    newDiv.querySelector('#eight-rejected-btn').addEventListener('click', function () {
        transferCard8(newDiv, 'rejected-section');

    })
    const interviewSection = document.getElementById('rejected-section');
    interviewSection.appendChild(newDiv);
    updateCount();

})







