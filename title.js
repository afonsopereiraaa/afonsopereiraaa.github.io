var i=0;
setInterval(function(){
    var titles=[
"||",
"|",
"|a|",
"|af|",
"|afo|",
"|afon|",
"|afons|",
"|afonso|",
"|afons|",
"|afon|",
"|af|",
"|a|",
"|f|",
"|",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
