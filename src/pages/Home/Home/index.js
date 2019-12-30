import React, { Component } from 'react'
import '../../../assets/css/Home/Home/index.less'
import Swiper from 'swiper'
export default class HomeIndex extends Component {

    componentDidMount() {
        new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    render() {
        return (
            <div className="HomeIndex">
                <header>
                    <p><input type="text" /></p>
                    <dl>
                        <dt><i className="icon iconfont icon-wode"></i></dt>
                        <dd>我的</dd>
                    </dl>
                </header>
                <section>
                    <div className="autoPlay">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><img src="https://dimg04.c-ctrip.com/images/zg0s180000014rym6B157.jpg" alt="" /></div>
                                <div className="swiper-slide"><img src="https://dimg04.c-ctrip.com/images/zg091b000001a3dk5F24B.jpg" alt="" /></div>
                                <div className="suiper-slide"><img src="https://dimg04.c-ctrip.com/images/zg051b000001b504h115F.jpg" alt="" /> </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        <div className="List-Nav">
                            <div className="dl">
                                <dl>
                                    <dt><img src="1.jpg" alt="" /></dt>
                                    <dd>攻略景点</dd>
                                </dl>
                                <dl>
                                    <dt><img src="1.jpg" alt="" /></dt>
                                    <dd>攻略景点</dd>
                                </dl>
                                <dl>
                                    <dt><img src="1.jpg" alt="" /></dt>
                                    <dd>攻略景点</dd>
                                </dl>
                                <dl>
                                    <dt><img src="1.jpg" alt="" /></dt>
                                    <dd>攻略景点</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div className="box-list">
                        {/* <div className="One">
                            <ul>
                                <li><img src="2.jpg" alt=""/></li>
                                <li><img src="3.jpg" alt=""/></li>
                                <li><img src="4.jpg" alt=""/></li>
                            </ul>
                       </div>
                       <div className="Two">
                        <ul>
                           
                        </ul>
                       </div> */}
                        <img src="1111.jpg" alt="" />
                    </div>
                    <div className="Nav">
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>自由行</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>wifi电话卡</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>保险签证</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>换钞购物</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>当地向导</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>特价机票</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>礼品卡</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>旅拍</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>更多</dd>
                        </dl>
                        <dl>
                            <dt><img src="111.jpg" alt="" /></dt>
                            <dd>自由行</dd>
                        </dl>


                    </div>
                    <div className="List-title">
                        <h1>特卖汇 <span>更多></span></h1>
                        <div className="title">
                            <div className="left">
                                <dl>
                                    <dt><img src="https://dimg03.c-ctrip.com/images/10020q000000gajaeDB6E_C_360_202.jpg" alt="" /></dt>
                                    <dd>
                                        <h2>三亚5日自由行(5钻)畅销【5钻度假型酒店合作</h2>
                                        <h3>￥2072起</h3>
                                    </dd>
                                </dl>
                            </div>
                            <div className="right">
                                <div className="top">
                                    <dl>
                                        <dd>
                                            <h2>千款特价</h2>
                                            <h3>走过路过不错过</h3>
                                        </dd>
                                        <dt><img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-02.png" alt="" /></dt>
                                    </dl>
                                </div>
                                <div className="bot">
                                    <dl>
                                        <dd>
                                            <h2>境外精选</h2>
                                            <h3>限时抢购</h3>
                                        </dd>
                                        <dt><img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-04.png" alt="" /></dt>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <h2>周边玩乐</h2>
                                            <h3>限时抢购</h3>
                                        </dd>
                                        <dt><img src="//pic.c-ctrip.com/platform/h5/home/pic-tmh-03.png" alt="" /></dt>
                                    </dl>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="Info">
                        <h1>热门活动 <span>获取更多福利 ></span></h1>
                        <div className="main-Info">
                            <dl>
                                <dt><img src="https://dimg04.c-ctrip.com/images/700t0y000000m71h523FE_375_260_342.png" alt="" /></dt>
                            </dl>
                            <dl>
                                <dt>
                                    <img src="https://images4.c-ctrip.com/target/zc0g0i0000009fvbaA666.png" alt="" />
                                </dt>
                            </dl>
                            <dl>
                                <dt><img src="https://images4.c-ctrip.com/target/zc0i0i0000009fp077B7E.png" alt="" /></dt>
                            </dl>
                            <dl>
                                <dt><img src="https://dimg04.c-ctrip.com/images/700w0z000000mogkyEF78_375_160_345.jpg" alt="" /></dt>
                            </dl>
                            <dl>
                                <dt><img src="https://dimg04.c-ctrip.com/images/700a0t000000im512AB2C_375_160_345.jpg" alt="" /></dt>
                            </dl>
                            <dl>
                                <dt><img src="https://dimg04.c-ctrip.com/images/700d0s000000htvwo16C4_375_160_345.jpg" alt="" /></dt>
                            </dl>
                        </div>
                    </div>
                    <div className="box-Info">
                        <dl>
                            <dt><i className="icon iconfont icon-fenlei"></i></dt>
                            <dd>电话预定</dd>
                        </dl>
                        <dl>
                            <dt><i className="icon iconfont icon-sousuo"></i></dt>
                            <dd>下载客服端</dd>
                        </dl>
                        <dl>
                            <dt><i className="icon iconfont icon-wode"></i></dt>
                            <dd>我的</dd>
                        </dl>
                    </div>

                    <div className="box-Bot">
                        <ul>
                            <li>网站地图</li>
                            <li>Language</li>
                            <li>电脑版</li>
                        </ul>
                        <p>
                            c2019携程旅行 丨 沪ICP备08023580号
                        </p>
                    </div>

                </section>
            </div>
        )
    }
}





