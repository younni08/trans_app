import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnavi = () => {
    const [expand,setExpand] = useState(true)
    const open = () => {
        document.getElementById("sidenavi").style.left = "0px";
    }

    const close = () => {
        document.getElementById("sidenavi").style.left = "-400px";
    }

    const expand2 = () => {
        setExpand(false)
    }

    return (
        <div className="topnavi">
            <div>
                <span onClick={open}><ion-icon name="reorder-four-outline"></ion-icon></span>
                <span>Trans_Lab</span>
                <span></span>
            </div>
            <div className="sidenavi" id="sidenavi">
                {
                    expand?
                    <div className="sidenavi_lv1">
                        <div onClick={expand2}>
                            <div>
                                <span>안녕하세요!</span>
                                <span>로그인 해주세요.</span>
                            </div>
                            <span><ion-icon name="person-circle-outline"></ion-icon></span>
                        </div>
                    </div>:
                    <div className="sidenavi_lv11">
                        <div>
                            <span>TestCat</span>
                            <span>님 안녕하세요!</span>
                        </div>
                        <div>
                            <div>
                                <span>123</span>
                                <span>points</span>
                            </div>
                            <div>
                                <span>포인트 구매</span>
                            </div>
                        </div>
                    </div>
                }
                <div className="sidenavi_lv2">
                    <Link to="/" onClick={close} >
                        <span><i className="xi-tablet"></i></span>
                        <span>스크린 번역</span>
                    </Link>
                    <Link to="/1" onClick={close} >
                        <span><i className="xi-image-o"></i></span>
                        <span>이미지 번역</span>
                    </Link>
                    <Link to="/2" onClick={close} >
                        <span><i className="xi-paper-o"></i></span>
                        <span>텍스트 번역</span>
                    </Link>
                </div>
                <div className="sidenavi_lv3">
                    <Link to="/4" onClick={close} >
                        <span><i className="xi-library-books-o"></i></span>
                        <span>번역 기록</span>
                    </Link>
                    <Link to="/3" onClick={close} >
                        <span><i className="xi-cog"></i></span>
                        <span>Setting</span>
                    </Link>
                    <div onClick={close}>
                        <span><i className="xi-close-min"></i></span>
                        <span>네비 닫기(임시)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnavi;