const tagad = new Date()
console.log(tagad)

const datums = new Date("2024-03-18")
console.log(datums)

izvade.innerHTML = tagad

izvade1.innerHTML = tagad.getDate() + "." + (tagad.getMonth()+1) + "." + tagad.getFullYear() + "."

function poga() {
const dat = new Date(ievade.value)
izvade2.innerHTML = dat
}

const intervals = new Date()
intervals.setDate(intervals.getDate() + 100)
console.log(intervals)

const d1 = new Date("2023-09-01")
const d2 = new Date()
const vecums = Math.abs(d1 - d2)/1000/60/60/24
console.log(Math.floor(vecums))