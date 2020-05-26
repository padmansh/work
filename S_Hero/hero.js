const link = "https://superheroapi.com/api/242292083696469/";

const image = document.querySelector(".image > img");
const intelligence = document.querySelector("#intelligence >p> span");
const strength = document.querySelector("#strength >p> span");
const power = document.querySelector("#power >p> span");
const fname = document.querySelector("#fname >p> span");
const speed = document.querySelector("#speed >p> span");
const durability = document.querySelector("#durability >p> span");
const combat = document.querySelector("#combat >p> span");
const hname = document.querySelector("#hname > p>span");

const search = document.querySelector("#srch");

search.addEventListener("click", () => {
    let hero = document.querySelector("#id").value;
    console.log(hero);
    let flink = link + hero;
    console.log(flink);
    fetch(`http://cors-anywhere.herokuapp.com/${flink}`, {
            headers: {
                origin: "localhost"
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            image.setAttribute("src", data.image.url);
            hname.textContent = data.name;
            fname.textContent = data.biography["full-name"];
            intelligence.textContent = data.powerstats.intelligence;
            strength.textContent = data.powerstats.strength;
            speed.textContent = data.powerstats.speed;
            durability.textContent = data.powerstats.durability;
            power.textContent = data.powerstats.power;
            combat.textContent = data.powerstats.combat;
        })
        .catch((error) => {
            console.error(error)
        })
});