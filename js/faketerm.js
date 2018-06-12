/*
    Filename:   faketerm.js
    Authors:    xX_WhatsTheGeek_Xx, LyrantheR, 
    Date:       11/06/2018
*/

let position = 0;

let Shell = "Meme Linux v4.20, Nuclear Edition\n\n";
let User = `${displayUser()}@HAL9000:~$ `;
let Command = "cat members.txt\n";
let Members = "\n   --------------------------------------------------------------------------\n" +
                "   | Role      | Name               | Social               | Github         |\n" +
                "   --------------------------------------------------------------------------\n" +
                "   | Founder   | Ben                | @Ben (plane000)#8618 | plane000       |\n" +
                "   | Founder   | AhoZiorce          | @AhoZiorce           |                |\n" +
                "   | Founder   | Extragornax        |                      |                |\n" +
                "   | Founder   | Jamason            |                      |                |\n" +
                "   | Founder   | Will               | @b_boy_ww#6631       | b-boy-ww       |\n" +
                "   | Founder   | xX_WhatsTheGeek_Xx | @WhatsTheGeekYT      | AlexanderRouma |\n" + 
                "   | Developer | Dwayer             |                      | Dewyer         |\n" + 
                "   | Developer | Lyranthe           | @Lyra#1114           | LyrantheR      |\n" + 
                "   | Developer | Vinex              |                      | Vinex0         |\n" + 
                "   | Designer  | None Currently!    |                      |                |\n" +
                "   --------------------------------------------------------------------------\n\n";
                
let DiscordCommand = "cat discord.txt\n";
let Discord = "\n   Join our discord at: https://discord.gg/PMRsAva\n\n";
let ClearCommand = "clear     ";

document.getElementById('terminal').value = "";

drawShell();

function drawShell() {
    document.getElementById('terminal').value += Shell[position];
    if (position < Shell.length - 1) {
        position++;
        setTimeout(drawShell, 5);
        return;
    }
    position = 0;
    drawUser();
}

function drawUser() {
    document.getElementById('terminal').value += User[position];
    if (position < User.length - 1) {
        position++;
        setTimeout(drawUser, 10);
        return;
    }
    position = 0;
    setTimeout(drawCommand, 500);
}

function drawCommand() {
    document.getElementById('terminal').value += Command[position];
    if (position < Command.length - 1) {
        position++;
        setTimeout(drawCommand, 100);
        return;
    }
    position = 0;
    setTimeout(drawMembers, 500);
}

function drawMembers() {
    document.getElementById('terminal').value += Members[position];
    if (position < Members.length - 1) {
        position++;
        setTimeout(drawMembers, 5);
        return;
    }
    position = 0;
    drawNextUser();
}

function drawNextUser() {
    document.getElementById('terminal').value += User[position];
    if (position < User.length - 1) {
        position++;
        setTimeout(drawNextUser, 5);
        return;
    }
    position = 0;
    setTimeout(drawDiscordCommand, 500);
}

function drawDiscordCommand() {
    document.getElementById('terminal').value += DiscordCommand[position];
    if (position < DiscordCommand.length - 1) {
        position++;
        setTimeout(drawDiscordCommand, 100);
        return;
    }
    position = 0;
    setTimeout(drawDiscord, 500);
}

function drawDiscord() {
    document.getElementById('terminal').value += Discord[position];
    if (position < Discord.length - 1) {
        position++;
        setTimeout(drawDiscord, 5);
        return;
    }
    position = 0;
    drawLastUser();
}

function drawLastUser() {
    document.getElementById('terminal').value += User[position];
    if (position < User.length - 1) {
        position++;
        setTimeout(drawLastUser, 10);
        return;
    }
    position = 0;
    //setTimeout(drawClearCommand, 10000);
}

function drawClearCommand() {
    document.getElementById('terminal').value += ClearCommand[position];
    if (position < ClearCommand.length - 1) {
        position++;
        setTimeout(drawClearCommand, 100);
        return;
    }
    position = 0;
    document.getElementById('terminal').value = "";
    setTimeout(drawUser, 500);
}

function displayUser() {
    let user = [
        "AhoZiorce",
        "Ben",
        "Extragornax",
        "Jamason",
        "Will",
        "xX_WhatsTheGeek_Xx",
        "Lyra",
        "Vinex",
        "Dwayer"
    ];
    let status = user[Math.floor(Math.random() * user.length)];
    return status;
}
