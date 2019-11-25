function main(){

    $.get("nav.html", function(data){
        $("#nav_bar").replaceWith(data);
        
        const pageId = this.location.pathname.split(".html")[0].substr(1);
        const selectedPageButton = document.getElementById(pageId);
        if(selectedPageButton){
            selectedPageButton.classList.add("selectedPage");
        }

    }.bind(this));//this se odnosi na Window
}
main();