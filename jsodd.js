const html = document.getElementById("htmlpage");
const checkbox = document.getElementById("checkbox");
const text = document.getElementById("darkorlight");
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        html.setAttribute("data-bs-theme", "dark");
        text.innerHTML = "dark";
    } else {
        html.setAttribute("data-bs-theme", "light");
        text.innerHTML = "light";
    }
});

const array = [20, 30, 5, 6, 11, 8, 7, 6, 2, 12, 18];
for (let i = 0; i < array.length; i++) {
    document.getElementById("for-loop").innerHTML +=
        i + ":" + array[i] + "<br>";
    if (array[i] === 11) {
        continue;
    }

    if (array[i] % 2 === 0) {
        document.getElementById("is-even").innerHTML +=
            "Number" + ":" + array[i] + "is even" + "<br>";
    }
    else {
        document.getElementById("is-odd").innerHTML +=
            "Number" + ":" + array[i] + "is odd" + "<br>";
    }
}

