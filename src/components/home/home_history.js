import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_lv1">
                <div>
                    <span><ion-icon name="stats-chart-outline"></ion-icon></span>
                    <span>최신 순<i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <div className="setting_expand">
                    <span>스크린 번역</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div className="trans_list">
                    <span>이미지 글자 인식기</span>
                </div>
                <div className="trans_list">
                    <span>이미지 글자 인식기</span>
                </div>
                <div className="trans_list">
                    <span>이미지 글자 인식기</span>
                </div>
                <div className="setting_expand2">
                    <span>이미지 번역</span>
                    <span><i className="xi-angle-up-min"></i></span>
                </div>
                <div className="setting_expand3">
                    <span>텍스트 번역</span>
                    <span><i className="xi-angle-up-min"></i></span>
                </div>
            </div>
        </div>
    )
}

export default Home;