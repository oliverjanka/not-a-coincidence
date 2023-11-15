const names = {
    "Adam": {hebrew: "אָדָם", translation: "man", after: "is", newSentence: true},
    "Seth": {hebrew: "שֵׁת", translation: "appointed"},
    "Enos": {hebrew: "אֱנוֹשׁ", translation: "mortal"},
    "Cainan": {hebrew: "קֵינָן", translation: "sorrow", after: "but"},
    "Mahalaleel": {hebrew: "מַהֲלַלְאֵל", translation: "the Blessed God"},
    "Jared": {hebrew: "יֶרֶד", translation: "shall come down"},
    "Enoch": {hebrew: "חֲנוֹךְ", translation: "teaching", sentenceEnd: true},
    "Methuselah": {hebrew: "מְתוּשֶׁלַח", translation: "his death shall bring", after: "the", newSentence: true},
    "Lamech": {hebrew: "לֶמֶךְ", translation: "despaired"},
    "Noah": {hebrew: "נֹחַ", translation: "relief", sentenceEnd: true}
}

function fillFullMeaning() {
    document.getElementById('full-meaning').innerHTML = Object.entries(names).map(([key, value], index) => {
        const after = value.after ? ` (${value.after})` : '';
        const point = value.sentenceEnd ? '.' : '';
        let text = `${value.translation}${after}${point}`;
        if (value.newSentence && text.length > 0) {
            text = text.charAt(0).toUpperCase() + text.slice(1);
        }
        return `<span class="${key}">${text}</span>`;
    }).join(' ');
}

function onClickName(name) {
    if (!name in names) return;
    document.querySelector(`#full-meaning .${name}`).style.visibility = 'visible';
}

(() => {
    fillFullMeaning();
    Array.from(document.getElementsByClassName("name")).forEach((element) => {
        const name = element.innerHTML;
        if (name in names) {
            const obj = names[name];
            element.onclick = onClickName.bind(window, name);
            element.dataset.tooltipText = `${obj.hebrew} : ${obj.translation}`;
        }
    });

    document.body.style.visibility = 'visible';
})();