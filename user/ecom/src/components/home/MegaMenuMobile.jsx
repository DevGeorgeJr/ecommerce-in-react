import React, { useEffect, Fragment } from 'react';

const MegaMenuMobile = () => {
    useEffect(() => {
        megaMenu();
    }, []);

    const megaMenu = () => {
        var acc = document.getElementsByClassName("accordionMobile");
        var accNum = acc.length;
        for (let i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    };

    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionMenuDivInsideMobile">
                {Array.from({ length: 20 }, (_, index) => (
                    <Fragment key={index}>
                        <button className="accordionMobile">
                            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="Menu Icon" />&nbsp; Men's Clothing
                        </button>
                        <div className="panelMobile">
                            <ul>
                                <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                                <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                            </ul>
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default MegaMenuMobile;
