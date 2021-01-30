
(function ($) {
    var config ={
        name :"wordmaker"
    };
    let selector;

    $.fn.mkmk = function(){
        selector = validSelector($(this));
        if(!selector) return false;
        console.log(selector);        
      };


    const validSelector =(sel)=>{
        let className = sel.attr('class');
        let idName = sel.attr('id');
        if(className === undefined || className === null){
            if(idName === undefined || idName === null){
                return selector = '';
            }else{
                if(config.name.indexOf(idName)!==-1){
                    return selector = '#' + idName;
                }else{
                    return selector='';
                }
            }
        }else{
            className = className.split(' ');
            if(config.name.indexOf(className)!==-1){
                return selector = '.' + className;
            }else{
                return selector='';
            }
        }
    };

}(jQuery));


// keyevent

function keyEvent(sel) {
    var kc;
    $(document).on('keydown', '#wordmaker', (e) => {
        kc = e.keyCode;
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