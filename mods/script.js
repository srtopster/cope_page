document.getElementById("b1").onclick = function calc() {
    a = document.getElementById("c1").value.split(",").map((x) => parseInt(x))
    b = document.getElementById("c2").value.split(",").map((x) => parseInt(x))
    c = document.getElementById("c3").value.split(",").map((x) => parseInt(x))
    h1 = a.concat([1]).concat(a)
    h2 = b.concat([1]).concat(b)
    h3 = c.concat([1]).concat(c)

    p1 = h1[0]*h2[1]*h3[2]
    p2 = h1[1]*h2[2]*h3[3]
    p3 = h1[2]*h2[3]*h3[4]

    m1 = h3[0]*h2[1]*h1[2]
    m2 = h3[1]*h2[2]*h1[3]
    m3 = h3[2]*h2[3]*h1[4]

    res = p1+p2+p3-m1-m2-m3
    document.getElementById("res").innerHTML = res
}
document.getElementsByTagName("p")[0].onclick = function easter_egg() {
    video = document.getElementById("vid")
    video.style.visibility = "visible"
    video.load()
    video.play()
}