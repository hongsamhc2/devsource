import * from "./keyControll";

(function ($) {
    $.fn.mkmk = () => {
        console.log($.fn.tagName);
        keyEvent();
        console.log('sd');
    };
}(jQuery));


// keyevent

function keyEvent() {
    var kc;
    $(document).on('keydown', '#wordmaker', (e) => {
        kc = e.keyCode;
        console.log(kc);
        upKey(kc);
    });
    $(document).on('keyup', '#wordmaker', (e) => {

    })
}





function upKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 38) {
        console.log('asd');
    };
}
function downKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 40) {
        console.log('asd');
    };
}
function leftKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 37) {
        console.log('asd');
    };
}
function rightKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 39) {
        console.log('asd');
    };
}
function enterKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 13) {
        console.log('asd');
    };
}
function backSpaceKey(kc) {
    var sel = false;
    if (!sel) return;
    if (kc === 8) {
        console.log('asd');
    };
}








var preventEvent = (e) => {
    e.preventEvent();
}