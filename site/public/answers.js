const scramble = document.getElementById("scramble");
const blanks = document.getElementById("blanks");
blankArray = [];


scramble.addEventListener("click", () => {
    const str = document.getElementById("firstHint").value;

    shuffle = str =>
        [...str]
            .reduceRight((res, _, __, arr) => (
                res.push(...arr.splice(0 | Math.random() * arr.length, 1)),
                res), [])
            .join('');

    document.getElementById("firstHint").value = shuffle(str);
})

blanks.addEventListener("click", () => {
    blankArray.push(document.getElementById("secondHint").value);

    function replace(str) {
        return str.split("").map(char =>
            char === ' ' ? ' ' : Math.random() > 0.35 ? "*" : char).join("");
    }

    document.getElementById("secondHint").value = replace(blankArray[0]);
})

// console.log("the quick brown fox jumps over the lazy dog".shuffle());