function alphabetize(a) {
    let answer = a.toLowerCase().split("").sort().join("").trim();
    return answer
}

function getAnagramsOf(input) {
    let answer1 = [];
    for (i = 0; i < words.length; i++) {
        if (alphabetize(input) === alphabetize(words[i])){
        answer1.push(words[i]);
        }
    }  
    let h3 = document.createElement("h3");
document.body.appendChild(h3);
h3.append(answer1);
return answer1;  
}
const button = document.getElementById("findButton");
button.onclick = function () {
    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);
}