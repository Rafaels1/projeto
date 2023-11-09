function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img//
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/rafael2.png")
  } else {
    img.setAttribute("src", "./assets/Rafaelpro1.png")
  }
}
