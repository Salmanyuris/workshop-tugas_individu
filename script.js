// let voteCount = 0;
let calon1 = Number(localStorage.getItem("calon1"))
let calon2 = Number(localStorage.getItem("calon2"))
let calon3 = Number(localStorage.getItem("calon3"))
// let calon1 = (Number.isInteger((Number(localStorage.getItem("calon1")  )))) ? 0 : Number(localStorage.getItem("calon1"));
// let calon2 = (isNaN(Number(localStorage.getItem("calon2")))) ? 0 : Number(localStorage.getItem("calon2"));
function resultBar(){
    document.querySelector(".calon1 #count").textContent = count("calon1") + "%";
    document.querySelector(".calon2 #count").textContent = count("calon2") + "%";
    document.querySelector(".calon3 #count").textContent = count("calon3") + "%";
}

resultBar();

percentage("calon1");
percentage("calon2");
percentage("calon3");

function count(calon){
    let hasil = Number(localStorage.getItem(calon));
    let calon1 = Number(localStorage.getItem("calon1"));
    let calon2 = Number(localStorage.getItem("calon2"));
    let calon3 = Number(localStorage.getItem("calon3"));
    console.info(hasil);
    // return calon2;
    if (calon1 != 0 || calon2 != 0 || calon3 != 0){
        return ((hasil/(calon1 + calon2 + calon3))*100).toFixed(2);
    } else {
        return 0;
    }
}

function percentage(calon){
    let progress = document.querySelector(`.${calon} progress`);
    progress.setAttribute("value", count(calon));
}

function vote(calon){
    const voteCountDisplay = document.querySelector(`.${calon} #count`);
    voteCount = Number(localStorage.getItem(calon));
    voteCount++;
    localStorage.setItem(calon, voteCount)
    voteCountDisplay.textContent = count(calon) + "%";
    percentage("calon1");
    percentage("calon2");
    percentage("calon3");
    resultBar();
}

function reset(){
    localStorage.clear();
    percentage("calon1");
    percentage("calon2");
    percentage("calon3");
    resultBar();
}

