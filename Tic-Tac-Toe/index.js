let count = 1;

function myFun(data) {
    if (count <= 9) {
        if (count % 2 == 0) {
            document.getElementById(data.id).innerHTML = "O"
        } else {
            document.getElementById(data.id).innerHTML = "X"
        }
        count++;
        if (win()) {
            alert("Winner");
            reset();
        }
    } else {
        alert("Match Draw");
        reset();
    }

}

function win() {
    // we given the arguments
    if (check("div1", "div2", "div3") || check("div4", "div5", "div6") || check("div7", "div8", "div9")
        || check("div1", "div4", "div7") || check("div2", "div5", "div8") || check("div3", "div6", "div9")
        || check("div1", "div5", "div9") || check("div3", "div5", "div7")) {

        return true;
    }
}

// in check passed the parameters
function check(div1, div2, div3) {
    // if (document.getElementById(div1).innerHTML != "" && document.getElementById(div2).innerHTML != "" && document.getElementById(div3).innerHTML != "" &&
    //     document.getElementById(div1).innerHTML == document.getElementById(div2).innerHTML &&
    //     document.getElementById(div2).innerHTML == document.getElementById(div3).innerHTML ) {
    //     return true;
    // }

    // if u want less code then 
    if( getData(div1) != "" && getData(div2) != "" && getData(div3) != "" &&
    getData(div1) == getData(div2) &&
    getData(div2) == getData(div3) ) {

        return true;
    }
}

function getData(div) {
    return document.getElementById(div).innerHTML
}

function reset() {
    location.reload();
}