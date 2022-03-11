import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home_lv1">
                <div>
                    <span><ion-icon name="funnel-outline"></ion-icon></span>
                    <span>최신 순<i className="xi-angle-down-min"></i></span>
                </div>
                <div>
                    <span><ion-icon name="receipt-outline"></ion-icon></span>
                    <span>전체<i className="xi-angle-down-min"></i></span>
                </div>
            </div>
            <div>
                <div className="setting_expand">
                    <span>번역 내역</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <div className="trans_list">
                    <span>2022-03-11 17:53</span>
                </div>
                <div className="trans_list">
                    <span>2022-03-11 12:53</span>
                </div>
                <div className="trans_list">
                    <span>2022-03-11 11:53</span>
                </div>
            </div>
        </div>
    )
}

export default Home;