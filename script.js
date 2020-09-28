const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const lastdayPrev = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDay = date.getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    document.getElementById("year").value = date.getFullYear();
    document.getElementById('months').value = date.getMonth();

    const dates = document.querySelector(".dates");
    dates.innerHTML += `<div class="row row0"></div>`;
    let countRow = 0;
    let countNumber = 0;

    //Previous
    let prevDate = lastdayPrev - firstDay + 1;
    for(let i = 0; i < firstDay; i++){
        let currentRow = document.querySelector(`.row${countRow}`);
        currentRow.innerHTML += `<div class="tanggal prev-date">${prevDate}</div>`;
        countNumber += 1;
        prevDate += 1;
    }

    //Current
    for(let j = 1; j<=lastDay; j++){
        let currentRow = document.querySelector(`.row${countRow}`);
        if(countNumber >= firstDay){
            countNumber += 1;
            if(countNumber%7 != 0){
                currentRow.innerHTML += `<div class="tanggal current-date">${j}</div>`;
            } else {
                currentRow.innerHTML += `<div class="tanggal current-date">${j}</div>`;
                countRow += 1;
                dates.innerHTML += `<div class="row row${countRow}"></div>`;
            }
        }
    }

    //Next
    let max = 42-countNumber;
    for(let k = 1; k <= max; k++){
        countNumber += 1;
        let currentRow = document.querySelector(`.row${countRow}`);
        if(countNumber%7 != 0){
            currentRow.innerHTML += `<div class="tanggal next-date">${k}</div>`;
        } else {
            currentRow.innerHTML += `<div class="tanggal next-date">${k}</div>`;
            countRow += 1;
            dates.innerHTML += `<div class="row row${countRow}"></div>`;
        }    
    }
} 

const months = [ "January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December" ];
let i = 0;
months.forEach(value => {
    document.getElementById("months").innerHTML += `
        <option class="month" value=${i}>${value}</option>
    `;
    i += 1;
});

document.querySelector('.prev')
.addEventListener('click', () =>{
    document.querySelector('.dates').innerHTML = "";
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next')
.addEventListener('click', () =>{
    document.querySelector('.dates').innerHTML = "";
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

function getMonth() {
    date.setMonth(document.getElementById("months").value);
    document.querySelector('.dates').innerHTML = "";
    renderCalendar();
}

function validateYear(){
    year = document.getElementById("year").value;
    document.querySelector('.dates').innerHTML = "";
    if(year > 0){
        document.querySelector(".menu p").innerHTML = "";
        date.setFullYear(year);
        renderCalendar();
    } else if(year == "") {
        //Do Nothing
    } else {
        document.querySelector(".menu p").innerHTML = "Tahun yang anda masukkan salah!";
        renderCalendar();
    }
} 

renderCalendar();