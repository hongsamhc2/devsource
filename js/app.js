$(document).ready(function () {
    adminLayout();

})

const adminLayout = () => {
    setHeader();
    let mainWidth;
    let mainHeight;
    let navWidth;
    let navHeight;
    let footerWidth;
    let footerHeight;
}

const setHeader = (h, w) => {
    let header = document.getElementsByTagName('header');
    (header.length === 0) ? console.log('Tag:Header is undefined'): header = header[0];
    header.style.height = h || '50px';
    header.style.width = w || '100%';
}

const setNav = () => {}
const setMain = () => {}
const setFooter = () => {}