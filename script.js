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

getData().then((dataTitle) => {
    dataTitle.forEach((element, index) => {
        title[index].textContent = element.title
    })
})

daily.addEventListener("click", () => {
    getData().then(dailyData => {
    dailyData.forEach((element,index) => {
        today_time[index].textContent = `${element.timeframes.daily.current}hrs`
        prev_time[index].textContent = `Last Week - ${element.timeframes.daily.previous}hrs`
        });
    })
})

weekly.addEventListener("click", () => {
    getData().then(weeklyData => {
    weeklyData.forEach((element,index) => {
        today_time[index].textContent = `${element.timeframes.weekly.current}hrs`
        prev_time[index].textContent = `Last Week - ${element.timeframes.weekly.previous}hrs`
        });
    })
})

monthly.addEventListener("click", () => {
    getData().then(monthlyData => {
    monthlyData.forEach((element,index) => {
        today_time[index].textContent = `${element.timeframes.monthly.current}hrs`
        prev_time[index].textContent = `Last Week - ${element.timeframes.monthly.previous}hrs`
        });
    })
})

// GETTING DATA FROM DATA.JSON FILE
async function getData() {
    const response = await fetch("data.json")
    const data = await response.json()
    return data
}