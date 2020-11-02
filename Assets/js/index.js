(function(){

    var menuOpen=false;
    var bar = document.getElementById("nav");
    var menu = document.getElementById("hamburger");
      
    function toggleMenu() {
        if (!menuOpen) {
            showMenu();
        } else {
            hideMenu();
        }
    }
    function hideMenu() {
        bar.style.height="0px";
      menuOpen=false;
      menu.innerHTML='<i class="fa fa-bars fa-2x" ></i>';
    }
    function showMenu() {
        bar.style.height="150px";
      menuOpen=true;
      menu.innerHTML='<i class="fa fa-chevron-up fa-2x" ></i>';
    }
    var items = document.getElementsByClassName("nav-item");
    for (var x=0; x<items.length; x++) {
        items[x].onclick=hideMenu;
    }
    menu.onclick=toggleMenu;
    
    })();