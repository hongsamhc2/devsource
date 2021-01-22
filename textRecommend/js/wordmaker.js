var textLoad = (function () {
    const wordmaker = $('#wordmaker');
    if (!wordmaker) return false;
    var tagScript = '';

    const po = () => {
        console.log('asdasds');
    };

    const testpop = () => {
        tagScript = '<div class="textpop"></div>';
        wordmaker.append(tagScript);
    };

    

    testpop();

    return {
        po: po
    }
})();
