var textLoad = (function () {
    const wordmaker = $('#trco');
    if (!wordmaker) return false;
    var tagScript = '';
    var taw = wordmaker.offset().top;
    var tal = wordmaker.offset().left;
    var fs = wordmaker.css('font-size');
    console.log(fs);
    const po = () => {
        console.log('asdasds');
    };

    const testpop = () => {
        tagScript = '<div class="textpop"></div>';
        wordmaker.after(tagScript);
        $('.textpop').css({
            'position':'absolute',
            'top':taw,
            'left':tal,
            'background-color':'white'
        });
    };

    const wordlist = ()=>{
        tagScript = '<div class="wordlist"><span>asdasdasdasd</span></div>';
        $('.textpop').append(tagScript);
    }

    testpop();
    wordlist();
    return {
        po: po
    }
})();
