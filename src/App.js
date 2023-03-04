import { useState } from "react";
import "./App.css";

const images = [
    "https://raw.githubusercontent.com/ME0NCONILEX/Front-End_p2/main/tmppics/DSC00XX1K.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://raw.githubusercontent.com/ME0NCONILEX/Front-End_p2/main/tmppics/DSC00XX4K.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://raw.githubusercontent.com/ME0NCONILEX/Front-End_p2/main/tmppics/DSC00XX3K.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://raw.githubusercontent.com/ME0NCONILEX/Front-End_p2/main/tmppics/DSC00XX2K.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

export default function App() {
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div>
            <h2>My pic-React-Project 'without fogg': MyPics</h2>
            <div className="slider">
                <div className="left-arrow" onClick={prevSlide}>
                    ... see also ⬅ ⬅ ⬅
                </div>
                <div className="right-arrow" onClick={nextSlide}>
                    ⮕ ⮕ ⮕ see also ...
                </div>
                {images.map(
                    (image, index) =>
                        current === index && (
                            <div key={image} className="slide">
                                <img src={image} alt="images" />
                            </div>
                        )
                )}
            </div>
        </div>
    );
}