import React, { useEffect, Fragment } from 'react';

const MegaMenu = () => {
    useEffect(() => {
        const toggleAccordion = (event) => {
            event.currentTarget.classList.toggle("active");
            const panel = event.currentTarget.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };

        const acc = document.getElementsByClassName("accordion");
        for (let i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", toggleAccordion);
        }

        // Cleanup function to remove event listeners
        return () => {
            for (let i = 0; i < acc.length; i++) {
                acc[i].removeEventListener("click", toggleAccordion);
            }
        };
    }, []);

    return (
        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">
                {/* Repeat for each accordion item */}
                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="Men's Clothing" />
                    &nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem">Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem">Mans Tshirt 2</a></li>
                    </ul>
                </div>
                {/* Repeat other sections as needed */}
            </div>
        </div>
    );
}

export default MegaMenu;
