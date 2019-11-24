function main(){
   
    $.get("footer.html", function(data){
        $("#footer").replaceWith(data);
    });
}
main();