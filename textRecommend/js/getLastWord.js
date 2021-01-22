var textRec = (function(key){
    $(document).on('keyup','#recomword',function(){
        var text = $('#recomword').val();
        var textLength = text.length;
        var currentPos = $('#recomword').prop('selectionStart');
        var textArr = text.slice(0,currentPos);
        var lastWord = textArr[textArr.length-1];
        if (lastWord){
            textArr = textArr.split('\n');
            textArr = textArr.join(' ');
            textArr = textArr.split(' ');
            textArr = textArr[textArr.length-1];
            console.log(textArr);
        }
    });
})()