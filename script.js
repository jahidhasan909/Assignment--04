
const jobDetailsCard = document.getElementById('job-detailes-card');



const totalJob = document.getElementById('total');
totalJob.innerText = jobDetailsCard.children.length;

const secondTotal = document.getElementById('2total');
secondTotal.innerText = jobDetailsCard.children.length;




function showOnly(id) {
    const allCard = document.getElementById('job-detailes-card');
    const interviewSection = document.getElementById('interview-section');
    const rejectedSection = document.getElementById('rejected-section');

    rejectedSection.classList.add('hidden');
    interviewSection.classList.add('hidden');
    allCard.classList.add('hidden');

    const select = document.getElementById(id);
    select.classList.remove('hidden');

}

function miniCount() {
    const miniCount = document.getElementById('mini-count');
    miniCount.classList.remove('hidden');
}
function miniHide() {
    const miniCount = document.getElementById('mini-count');
    miniCount.classList.add('hidden');
}


function colorAdd(id) {
    const allBtn = document.querySelectorAll('.btn');
    for (let colors of allBtn) {
        colors.classList.remove('top-btn3');
        colors.classList.add('bg-white');
    }
    let selectt = document.getElementById(id);
    selectt.classList.add('top-btn3');
}


// job card 1
document.getElementById('first-interview-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('first-status');
    firstStatus.innerText = 'Interview';
    firstStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');

    const card1 = document.getElementById('card1');

    const copyInterHtmlS = card1.innerHTML
    const newDivs = document.createElement('div')
    newDivs.innerHTML = copyInterHtmlS;
    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDivs);

    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;


})

document.getElementById('first-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('first-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card1');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})



// job card 2
document.getElementById('second-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('second-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card2');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;




})

document.getElementById('second-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('second-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card2');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})



// job card 3

document.getElementById('third-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('third-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card3');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;




})

document.getElementById('third-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('third-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card3');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})


// job card 4

document.getElementById('four-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('four-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card4');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;

})

document.getElementById('four-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('four-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card4');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})


// job card 5
document.getElementById('five-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('five-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card5');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;

})

document.getElementById('five-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('five-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card5');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})



// job card 6
document.getElementById('six-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('six-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card6');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;

})

document.getElementById('six-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('six-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card6');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})


// job card 7

document.getElementById('seven-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('seven-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card7');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;

})

document.getElementById('seven-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('seven-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card7');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})

// job card 8

document.getElementById('eight-interview-btn').addEventListener('click', function () {
    const secondStatus = document.getElementById('eight-status');
    secondStatus.innerText = 'Interview';
    secondStatus.classList.add('status-interview-btn');

    const interviewCount = document.getElementById('interview-count');
    const miniCount = document.getElementById('mini-count');


    const card2 = document.getElementById('card8');

    const copyInterHtml = card2.innerHTML;
    const newDiv = document.createElement('div')
    newDiv.innerHTML = copyInterHtml


    const interviewSection = document.getElementById('interview-section');
    interviewSection.appendChild(newDiv);
    miniCount.innerText = interviewSection.children.length;
    interviewCount.innerText = interviewSection.children.length;

})

document.getElementById('eight-rejected-btn').addEventListener('click', function () {
    const firstStatus = document.getElementById('eight-status');
    firstStatus.innerText = 'Rejected';
    firstStatus.classList.add('status-rejected-btn');

    const rejectedCount = document.getElementById('rejected-count');
    const miniCount = document.getElementById('mini-count');


    const card1 = document.getElementById('card8');

    const copyInterHtml = card1.innerHTML;

    const newDiv = document.createElement('div');
    newDiv.innerHTML = copyInterHtml;


    const interviewReject = document.getElementById('rejected-section');
    interviewReject.appendChild(newDiv);

    rejectedCount.innerText = interviewReject.children.length;
    miniCount.innerText = interviewReject.children.length;


})