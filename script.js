const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")
const btn = document.querySelectorAll(".btn")
const title = document.querySelectorAll(".categories")
const today_time = document.querySelectorAll(".today-time")
const prev_time = document.querySelectorAll(".previous-time")


// keeping the active state until it click to another button
btn.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".btn-clr").classList.remove("btn-clr")
        button.classList.add("btn-clr")
    })
})

getTitle().then((dataTitle) => {
    dataTitle.forEach((element, index) => {
        title[index].textContent = element
    })
})

daily.addEventListener("click", async () => {
    let daily = await getDaily()
    daily.forEach((element, index) => {
        today_time[index].textContent = `${element.current}hrs`
        prev_time[index].textContent = `Last Daily - ${element.previous}hrs`
    })
})

weekly.addEventListener("click", async () => {
    let weekly = await getWeekly()
    weekly.forEach((element, index) => {
        today_time[index].textContent = `${element.current}hrs`
        prev_time[index].textContent = `Last Weekly - ${element.previous}hrs`

    })
})

monthly.addEventListener("click", async () => {
    let monthly = await getMonthly()
    monthly.forEach((element, index) => {
        today_time[index].textContent = `${element.current}hrs`
        prev_time[index].textContent = `Last Monthly - ${element.previous}hrs`
        // today_time[index].textContent = `${element[]}`
    })
})

// GETTING DATA FROM DATA.JSON FILE
async function getData() {
    const response = await fetch("data.json")
    const data = await response.json()
    return data
}

// TIMEFRAMES = DAILY, WEEKLY, MONTHLY 
async function getDaily() {
    let data = await getData()
    let dayJson = data.map(element => {
        return element.timeframes.daily
    })
    return dayJson;
}

async function getWeekly() {
    let data = await getData()
    let weekJson = data.map(element => {
        return element.timeframes.weekly
    });
    return weekJson;
}

async function getMonthly() {
    let data = await getData()
    let monthlyJson = data.map(element => {
        return element.timeframes.monthly
    });
    return monthlyJson;
}

// ============================= 
async function getTitle() {
    let data = await getData()
    let titleJson = data.map(element => {
        return element.title
    });
    return titleJson
}





// daily.addEventListener("click", () => {
    
// })
