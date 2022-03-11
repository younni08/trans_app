import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_lv1">
                <div>
                    <span><ion-icon name="eye-outline"></ion-icon></span>
                    <span>영어<i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span><ion-icon name="language-outline"></ion-icon></span>
                    <span>한국어<i className="xi-angle-down-min"></i></span>
                </div>
            </div>
            <div className="home_lv2">
                <div>
                    <span><ion-icon name="images-outline"></ion-icon></span>
                    <span>이미지 선택</span>
                </div>
            </div>
            <div className="home_buttons">
                <div className="bu1">
                    <span className="blue"><i className="xi-mobile xi-x"></i></span>
                    <span>스크린</span>
                </div>
                <div className="bu2">
                    <span className="green"><ion-icon name="rocket-outline"></ion-icon></span>
                </div>
                <div className="bu1">
                    <span className="dark"><i className="xi-paper-o xi-x"></i></span>
                    <span>텍스트</span>
                </div>
            </div>
            <div className="home_lv5">
                <div>
                    <span>광고</span>
                </div>
            </div>
        </div>
    )
}

export default Home;