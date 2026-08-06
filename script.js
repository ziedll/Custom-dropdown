const item1 = document.getElementById("First-item");
const item2 = document.getElementById("Second-item");
const item3 = document.getElementById("Third-item");
const item4 = document.getElementById("Fourth-item");
const item5 = document.getElementById("Fifth-item");
const iconeTick = document.createElement("span");
const itemselect = document.getElementById("item-selection");
function Tick(evt) {
    iconeTick.innerHTML = "&#10003;";
    iconeTick.style.color = "green";
    iconeTick.style.fontWeight = "bold";
    switch (evt.target.value) {
        case "First-item":
            item1.appendChild(iconeTick);
            break;
        case "Second-item":
            item2.appendChild(iconeTick);
            break;
        case "Third-item":
            item3.appendChild(iconeTick);
            break;
        case "Fourth-item":
            item4.appendChild(iconeTick);
            break;
        case "Fifth-item":
            item5.appendChild(iconeTick);
            break;
        case "item-selection":
            iconeTick.remove();
            break;
    }
}
