(function($){
    $.fn.mkmk=()=>{
        keyDown();
        console.log('sd');
    };
}(jQuery));


// keyevent

function keyDown(){
    $(document).on('keydown','#wordmaker',(e)=>{
        var kc = e.keyCode;

        console.log(kc);


        return kc
    });
}

function upKey(e){


}