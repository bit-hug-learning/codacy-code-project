    const footerLink = document.querySelectorAll(".footer__item:not(.second) > .footer__link:not(.second)");

    const footerList2 = document.querySelectorAll(".footer__list.second");
    for(let i = 0; i < footerLink.length; i++) {
        footerLink[i].addEventListener("click",function HideShowMenu() {
            footerList2[i].classList.toggle("hide-show");
        });
    }



