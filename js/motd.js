/*
    Filename:   motd.js
    Authors:    Ben, xX_WhatsTheGeek_Xx, Lyra
    Date:       11/06/2018
*/

function displayMotd() {
    let motd = [
        "the death of Harambe",
        "9/11",
        "ur mum turned gay",
        "Lyra took over the company",
        "Ben was right and Will was wrong",
        "Jamison is spelled Jamison",
        "loss died",
        "loss diddnt die",
        "the loss of loss",
        "your mum was a funny joke",
        "mum disowned us",
        "furries became mainstream",
        "the fitnessgram pacer test"
    ];

    document.getElementById('motd').innerText += ` ${motd[Math.floor(Math.random() * motd.length)]}.`; 
}
