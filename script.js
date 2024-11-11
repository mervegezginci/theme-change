var ball = document.querySelector("#ball");
var leftside = localStorage.getItem("theme") === "dark" ? false : true; // localStorage'dan temayı kontrol edilir

// sayfa yüklendiğinde temayı kontrol eder ve uygun temayı ayarlar
window.addEventListener("load", () => {
    if (leftside === false) {
        ball.style.left = "45px";
        ball.style.backgroundColor = "#111";
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = "#111";
    } else {
        ball.style.left = "5px";
        ball.style.backgroundColor = "#fff";
        document.querySelector(".mode").style.backgroundColor = "#111";
        document.querySelector("body").style.backgroundColor = "#fff";
    }
});

// tema değiştirme işlevi
function changeTheme() {
    if (leftside === true) {
        ball.style.left = "45px";
        ball.style.backgroundColor = "#111";
        leftside = false;
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = "#111";
        localStorage.setItem("theme", "dark");
    } else {
        ball.style.left = "5px";
        ball.style.backgroundColor = "#fff";
        leftside = true;
        document.querySelector(".mode").style.backgroundColor = "#111";
        document.querySelector("body").style.backgroundColor = "#fff";
        localStorage.setItem("theme", "light");
    }
}

ball.addEventListener("click", changeTheme);
