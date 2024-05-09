import React, { useEffect, Component, Fragment } from 'react'

const MegaMenu = () => {

    useEffect(() => {
        const toggleAccordion = function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        };

        var acc = document.getElementsByClassName("accordion");
        var accNum = acc.length;
        for (let i = 0; i < accNum; i++) {
            acc[i].addEventListener("click", toggleAccordion);
        }

        return () => {
            for (let i = 0; i < accNum; i++) {
                if (acc[i]) {
                    acc[i].removeEventListener("click", toggleAccordion);
                }
            }
        };
    }, []);

    return (
        <div className="accordionMenuDiv">
            <div className="accordionMenuDivInside">

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>


                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>

                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>



                <button className="accordion">
                    <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/739/739249.png" />&nbsp; Men's Clothing
                </button>
                <div className="panel">
                    <ul>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
                        <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MegaMenu