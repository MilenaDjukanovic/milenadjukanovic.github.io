function main(){
    // $(function(){
    //     $("#nav_bar").load("../html/nav.html")
    // });
    $.get("nav.html", function(data){
        $("#nav_bar").replaceWith(data);
    });
}
main();