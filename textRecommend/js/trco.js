$(document).ready(function () {
    var oo = {
        '명성': '1',
        '명강': '2'
    };
    console.log(00);
    var key = Object.keys(oo);
    console.log(key);
    let result = key.map((t) => {
        if (t.indexOf('강')!==-1) console.log(oo[t]);
        return t.indexOf('명');
        
    });
})