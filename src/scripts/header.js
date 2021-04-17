const header = document.getElementById("header")

const observer = new IntersectionObserver(([e]) => {
    header.style.backgroundColor = e.intersectionRatio < 1 ? "var(--main-bg-color)" : "transparent"
    console.log(e.intersectionRatio)
},
{ threshold:[1]} )

observer.observe(header)