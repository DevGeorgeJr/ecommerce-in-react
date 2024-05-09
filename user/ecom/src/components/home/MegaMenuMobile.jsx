import React, { useEffect } from 'react';

const MegaMenuMobile = () => {
    useEffect(() => {
        const acc = document.getElementsByClassName("accordionMobile");
        const toggleAccordion = (event) => {
            const currentTarget = event.currentTarget;
            currentTarget.classList.toggle("active");
            const panel = currentTarget.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };

        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", toggleAccordion);
        }

        return () => {
            for (let i = 0; i < acc.length; i++) {
                acc[i].removeEventListener("click", toggleAccordion);
            }
        };
    }, []);

    return (
        <div className="accordionMenuDivMobile">
            <div className="accordionMenuDivInsideMobile">
                <button className="accordionMobile">
                    <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="Men's Clothing" />
                    &nbsp; Men's Clothing
                </button>
                <div className="panelMobile">
                    <ul>
                        <li><a href="#" className="accordionItemMobile">Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItemMobile">Mans Tshirt 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MegaMenuMobile;
