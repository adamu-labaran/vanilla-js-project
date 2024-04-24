const getCurrentTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleDateString();
    return currentTime;
  }
const randNums = (top, left, hue) => {
    const random = Math.random();
    const topOffSet =  random * top;
    const leftOffSet = random * left;

    const h = random * hue;
    s = 50;
    l = 50;

    return [topOffSet, leftOffSet, h, s, l];
}

  const renderClock = () => {
    const timeElement = document.querySelector("#time");
    timeElement.textContent = getCurrentTime();

    const [topMove, leftMove, hue, saturation, light] = randNums(100, 80, 360);
    timeElement.setAttribute("style", `top: ${topMove}%; left: ${leftMove}%; color: hsl(${hue}, ${saturation}%, ${light}%)`)
  }
  renderClock();
  setInterval(renderClock, 1000)
