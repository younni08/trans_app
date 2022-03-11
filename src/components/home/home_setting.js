import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="setting">
                <div className="setting_expand">
                    <span>이미지 설정</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div className="setting_item">
                    <span>이미지 글자 인식기</span>
                    <div>
                        <span>한국어</span>
                    </div>
                </div>
                <div className="setting_item">
                    <span>인식 언어 설정</span>
                    <div>
                        <span>한국어</span>
                    </div>
                </div>
                <div className="setting_spacer"></div>
                <div className="setting_item">
                    <span>이미지 글자 인식기</span>
                    <div>
                        <span>한국어</span>
                    </div>
                </div>
                <div className="setting_item">
                    <span>인식 언어 설정</span>
                    <div>
                        <span>한국어</span>
                    </div>
                </div>
                <div className="setting_expand2">
                    <span>텍스트 설정</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div className="setting_item">
                    <span>이미지 글자 인식기</span>
                    <div>
                        <span>한국어</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;