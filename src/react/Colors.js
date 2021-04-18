import React from 'react';

export default function Colors() {
    const colors = ["Blue", "Pink", "Brown", "Black", "Purple", "Blonde", "Orange", "Red", "Violet", "Green", "Gray", "Gold", "White", "Dark Blue", "Magenta", "Dark Brown", "Dark Purple", "Dark Red", "Dark Green", "Light Blue", "Light Pink", "Light Brown", "Lilac", "Light Blonde", "Light Orange", "Light Red", "Light Green", "Teal", "Lime Green", "Red-Orange"];
    const randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}

export function Gradients() {
    const randNum = Math.floor(Math.random() * 9);
    let gradient;
    switch (randNum) {
        case 0:
            gradient = ["#e9be60", "#04442f"];
            break;
        case 1:
            gradient = ["#60bee9", "#043044"];
            break;
        case 2:
            gradient = ["#d0b2e4", "#010241"];
            break;
        case 3:
            gradient = ["#dd4376", "#1e075c"];
            break;
        case 4:
            gradient = ["#dd9a43", "#970000"];
            break;
        case 5:
            gradient = ["#ff5e62", "#610035"];
            break;
        case 6:
            gradient = ["#d9a7c7", "#510061"];
            break;
        case 7:
            gradient= ["#FF6B6B", "#142a42"];
            break;
        case 8:
            gradient = ["#F0C27B", "#4B1248"];
            break;
        case 9:
            gradient = ["#870000", "#190A05"];
            break;
        case 10:
            gradient = ["#A8CABA", "#5D4157"];
            break;
        case 11:
            gradient = ["#e9d362", "#333333"];
            break;
        case 12:
            gradient = ["#49a09d", "#5f2c82"];
            break;

    }

    return gradient;
}



