import React, { useEffect } from 'react';

const MegaMenuAll = () => {
    useEffect(() => {
        const acc = document.getElementsByClassName("accordionAll");
        const toggleAccordion = (event) => {
            const target = event.currentTarget;
            target.classList.toggle("active");
            const panel = target.nextElementSibling;
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
        <div className="accordionMenuDivAll">
            <div className="accordionMenuDivInsideAll">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index}>
                        <button className="accordionAll">
                            <img className="accordionMenuIconAll" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="Men's Clothing" />
                            &nbsp; Men's Clothing
                        </button>
                        <div className="panelAll">
                            <ul>
                                <li><a href="#" className="accordionItemAll">Mans Tshirt 1</a></li>
                                <li><a href="#" className="accordionItemAll">Mans Tshirt 2</a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MegaMenuAll;
