function getElementWidth(content, padding, border){
    const contentWithoutPx = Number.parseFloat(content);
    const paddingWithoutPx = Number.parseFloat(padding);
    const borderWithoutPx = Number.parseFloat(border);
    const result = contentWithoutPx + (2 * paddingWithoutPx) + (2 * borderWithoutPx);
    return result;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

