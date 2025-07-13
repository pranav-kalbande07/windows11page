let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", () => {
    if (startmenu.style.bottom == "50px") {
        startmenu.style.bottom = "-655px"
    }
    else {
        startmenu.style.bottom = "50px"
    }
}
)

let chrome = document.getElementsByClassName("icons")[0]
chrome.addEventListener("ondblclick", () => {
    if (chrome.style.bottom == "50px") {
        chrome.style.bottom = "-655px"
    }
    else {
        chrome.style.bottom = "50px"
    }
}
)