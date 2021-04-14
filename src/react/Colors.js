import React from 'react';

export function Colors() {
    const colors = ["blue", "pink", "brown", "black", "purple", "yellow", "orange", "red", "violet", "green", "gray", "gold", "white", "dark blue", "magenta", "dark brown", "dark purple", "bronze", "dark red", "dark green", "light blue", "light pink", "light brown", "lilac", "light yellow", "light orange", "light red", "light green", "teal", "lime green", "red-orange"];
    const randNum = Math.floor(Math.random() * colors.length);
    return colors[randNum];
}