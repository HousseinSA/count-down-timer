
const flipCard = document.querySelector(".flip-card")
function flip(flipCard, num) {
  const topHalf = flipCard.querySelector(".top")
  const bottomHalf = flipCard.querySelector(".bottom")
  const startNumber = parseInt(topHalf.textContent)
  const flipTop = document.createElement("div")
  const flipBottom = document.createElement("div")
  flipTop.classList.add("top-flip")
  flipBottom.classList.add("bottom-flip")
  if(num === startNumber) return
  flipTop.textContent = startNumber
  topHalf.textContent = startNumber
  flipBottom.textContent = num
  bottomHalf.textContent = startNumber
  flipTop.addEventListener("animationstart", () => {
    topHalf.textContent = num
  })
  flipTop.addEventListener("animationend", () => {
    flipTop.remove()
  })
  flipBottom.addEventListener("animationend", () => {
    bottomHalf.textContent = num
    flipBottom.remove()
  })
  flipCard.append(flipTop, flipBottom)
}


const currentDate = new Date().setHours(new Date().getHours() + 24)

setInterval(() => {
  const changedDate = new Date()
  const newDate = Math.ceil((  currentDate-changedDate) / 1000)
  changeDTime(newDate)
}, 250)

function changeDTime(time) {
  const seconds = time % 60
  const minutes = Math.floor((time / 60) % 60)
  const hours = Math.floor(time / 3600)
  flip(document.querySelector("[data-hours-s]"), Math.floor(hours / 10))
  flip(document.querySelector("[data-hours-t]"), hours % 10)
  flip(document.querySelector("[data-minutes-s]"), Math.floor(minutes / 10))
  flip(document.querySelector("[data-minutes-t]"), minutes % 10)
  flip(document.querySelector("[data-seconds-s]"), Math.floor(seconds / 10))
  flip(document.querySelector("[data-seconds-t]"), seconds % 10)
}
