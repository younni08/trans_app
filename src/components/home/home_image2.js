import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_lv1">
                <div>
                    <span><ion-icon name="construct-outline"></ion-icon></span>
                    <span>구글 기본<i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span><ion-icon name="language-outline"></ion-icon></span>
                    <span>한국어<i className="xi-angle-down-min"></i></span>
                </div>
            </div>
            <div className="home_lv20">
                <div>
                    <span>이미지 번역 이미지</span>
                </div>
                <div className="home_lv22">
                    <div>
                        <div>
                            <span><i className="xi-image-o xi-x"></i></span>
                            <span>이미지 불러오기</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_lv3">
                <div>
                    <span>번역하기</span>
                    <span><i className="xi-cog"></i></span>
                </div>
            </div>
            <Link to="/1" className="home_lv4">
                <div>
                    <span><i className="xi-image-o xi-x"></i></span>
                    <span>이미지 번역</span>
                </div>
            </Link>
            <Link to="/2" className="home_lv4">
                <div>
                    <span><i className="xi-paper-o xi-x"></i></span>
                    <span>텍스트 번역</span>
                </div>
            </Link>
            <Link to="/4" className="home_lv4">
                <div>
                    <span><i className="xi-chart-bar"></i></span>
                    <span>번역 기록</span>
                </div>
            </Link>
            <div className="home_lv5">
                <div>
                    <span>광고</span>
                </div>
            </div>
        </div>
    )
}

export default Home;