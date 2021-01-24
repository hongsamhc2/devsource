var textLoad = (function () {
    const wordmaker = $('#trco') | {};
    if (!wordmaker) return false;
    var tagScript = '';
    var taw = wordmaker.offset().top;
    var tal = wordmaker.offset().left;
    var fs = wordmaker.css('font-size');
    var cmp = wordmaker.prop('selectionStart');
    console.log(wordmaker);
    
    const po = () => {
        console.log('asdasds');
    };

    const testpop = () => {
        tagScript = '<div class="textpop"></div>';
        wordmaker.after(tagScript);
        $('.textpop').css({
            'position': 'absolute',
            'top': taw,
            'left': tal,
            'background-color': 'white',
            'border': '1px solid black'
        });
    };

    const wordlist = () => {
        tagScript = '<div class="wordlist"><span>asdasdasdasd</span></div>';
        $('.textpop').append(tagScript);
    };

    const checkWord = (text)=>{
        var ko = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
        var en = /[a-z|A-Z|\s]/g;
        ko = text.match(ko);
        en = text.match(en);
        var kol = ko.length;
        var enl = en.length;

        if(ko){
            console.log(kol);
            console.log(enl);
        }
    };

    testpop();
    wordlist();
    checkWord('가가 가가가가가\nasdasd ');
    return {
        po: po
    }
})();