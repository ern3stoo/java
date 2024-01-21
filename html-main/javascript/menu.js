let menu = burger.querySelectorAll("menu")
menu.ForEac(function (menu) {
menu.addEventListener("click", function() {
    this.classList.toggle('open')
    })
})

