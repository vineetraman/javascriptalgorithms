(function readfile(){
    jQuery.ajax({url: "./jsonfile.json" , async: false, success:function(data){
        console.log("ajax call completed");
        var list = [];
        var entry = new Object(data);
        entry.name = "vineet";
        entry.age = 29;
        list.push(entry);
    }} );
    /* jQuery.getJSON( "./jsonfile.json" , null, function(data){
        console.log("ajax call completed");
        var list = [];
        var entry = new Object(data);
        entry.name = "vineet";
        entry.age = 29;
        list.push(entry);
    } ); */
    console.log("ajax call going on");
})();