$(function(){
    let start   = 0;
    let end     = $(".num").html();
    let speed   = 3;
    
    setInterval(function(){
    if (start<end){
        start++;
    }
    $(".num").html(start);
    }, speed);
    
    
    });
    $(function(){
        let start   = 0;
        let end     = $(".num-1").html();
        let speed   = 2;
        
        setInterval(function(){
        if (start<end){
            start++;
        }
        $(".num-1").html(start);
        }, speed);
        
        
        });
        