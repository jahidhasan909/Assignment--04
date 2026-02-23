




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

function colorAdd(id) {
    const allBtn = document.querySelectorAll('.btn');
    for (let colors of allBtn) {
        colors.classList.remove('top-btn3');
        colors.classList.add('bg-white');
    }
    let selectt = document.getElementById(id);
    selectt.classList.add('top-btn3');
}


// all count
function updateCount() {
    const interviewSection = document.getElementById('interview-section');
    const rejectedSection = document.getElementById('rejected-section');


    const interviewJobCounts = interviewSection.querySelectorAll('.job-card');
    const interviewJobCount = interviewJobCounts.length;

    const interviewCount = document.getElementById('interview-count');
    interviewCount.innerText = interviewJobCount;

    const rejectedCounts = rejectedSection.querySelectorAll('.job-card');
    const rejectedJobCount = rejectedCounts.length;

    const rejectedCount = document.getElementById('rejected-count');
    rejectedCount.innerText = rejectedJobCount;



    updateMini();
    updateMiniRe();


}
function miniCount() {
    const miniCount = document.getElementById('mini-count');
    miniCount.classList.remove('hidden');
}
function miniHide() {
    const miniCount = document.getElementById('mini-count');
    miniCount.classList.add('hidden');
}

function miniCount2() {
    const miniCount2 = document.getElementById('mini-count2')
    miniCount2.classList.remove('hidden');
}
function miniHide2() {
    const miniCount2 = document.getElementById('mini-count2')
    miniCount2.classList.add('hidden');
}
function updateMini() {
    const miniCount = document.getElementById('mini-count');
    const interviewSection = document.getElementById('interview-section');

    const interviewJobCounts = interviewSection.querySelectorAll('.job-card');
    const interviewJobCount = interviewJobCounts.length;




    miniCount.innerText = `${interviewJobCount} of `;
}
function updateMiniRe() {
    const miniCount = document.getElementById('mini-count2');
    const rejectJobCount = document.getElementById('rejected-section');

    const rejectedJobCounts = rejectJobCount.querySelectorAll('.job-card');
    const rejectedJobCount = rejectedJobCounts.length;
    miniCount.innerText = `${rejectedJobCount} of`;
}



// ---------------------------------------------------------------------------
// all jobCard CardTransfer ,statusButton Control,button disable enable control..


// job card 1 handler

function buttonControl(card, section) {
    const interviewButton = card.querySelector('#first-interview-btn');
    const rejectedButton = card.querySelector('#first-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card1');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl(card, status);
    buttonControl(card, status);

    StatusControl(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl(card, jobStatus) {
    const status = card.querySelector('#first-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}



// job card 2 handler
function buttonControl2(card, section) {
    const interviewButton = card.querySelector('#second-interview-btn');
    const rejectedButton = card.querySelector('#second-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard2(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card2');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl2(card, status);
    buttonControl2(card, status);

    StatusControl2(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl2(card, jobStatus) {
    const status = card.querySelector('#second-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}





// job card 3 handler
function buttonControl3(card, section) {
    const interviewButton = card.querySelector('#third-interview-btn');
    const rejectedButton = card.querySelector('#third-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard3(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card3');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl3(card, status);
    buttonControl3(card, status);

    StatusControl3(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl3(card, jobStatus) {
    const status = card.querySelector('#third-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}



// job card 4 handler
function buttonControl4(card, section) {
    const interviewButton = card.querySelector('#four-interview-btn');
    const rejectedButton = card.querySelector('#four-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard4(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card4');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl4(card, status);
    buttonControl4(card, status);

    StatusControl4(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl4(card, jobStatus) {
    const status = card.querySelector('#four-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}





// job card 5 handler
function buttonControl5(card, section) {
    const interviewButton = card.querySelector('#five-interview-btn');
    const rejectedButton = card.querySelector('#five-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard5(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card5');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl5(card, status);
    buttonControl5(card, status);

    StatusControl5(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl5(card, jobStatus) {
    const status = card.querySelector('#five-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}





// job card 6 handler
function buttonControl6(card, section) {
    const interviewButton = card.querySelector('#six-interview-btn');
    const rejectedButton = card.querySelector('#six-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard6(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card6');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl6(card, status);
    buttonControl6(card, status);

    StatusControl6(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl6(card, jobStatus) {
    const status = card.querySelector('#six-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}



// job card 7 handler
function buttonControl7(card, section) {
    const interviewButton = card.querySelector('#seven-interview-btn');
    const rejectedButton = card.querySelector('#seven-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard7(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card7');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl7(card, status);
    buttonControl7(card, status);

    StatusControl7(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl7(card, jobStatus) {
    const status = card.querySelector('#seven-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}




// job card 8 handler
function buttonControl8(card, section) {
    const interviewButton = card.querySelector('#eight-interview-btn');
    const rejectedButton = card.querySelector('#eight-rejected-btn');


    if (section === 'all') {
        interviewButton.disabled = true;
        rejectedButton.disabled = true;

    } else if (section === 'interview') {
        interviewButton.disabled = true;
        rejectedButton.disabled = false;

    } else if (section === 'rejected') {
        interviewButton.disabled = false;
        rejectedButton.disabled = true;
    }
}


function transferCard8(card, id) {
    const CardP = card.parentElement;
    CardP.removeChild(card);
    const originalCard = document.getElementById('card8');

    // if (id == 'interview-section') {
    //     buttonControl(card, 'interview')
    //     StatusControl(originalCard, 'interview')

    // } else if (id == 'rejected-section') {
    //     buttonControl(card, 'rejected')
    //     StatusControl(originalCard, 'rejected')

    // }

    const status = id === 'interview-section' ? 'interview' : 'rejected';
    StatusControl8(card, status);
    buttonControl8(card, status);

    StatusControl8(originalCard, status);

    const idLo = document.getElementById(id);
    idLo.appendChild(card);

    updateCount();

}


function StatusControl8(card, jobStatus) {
    const status = card.querySelector('#eight-status');

    status.classList.remove('status-interview-btn', 'status-rejected-btn');

    if (jobStatus === 'interview') {
        status.innerText = 'Interview';
        status.classList.add('status-interview-btn');
    }

    if (jobStatus === 'rejected') {
        status.innerText = 'Rejected';
        status.classList.add('status-rejected-btn');
    }

}