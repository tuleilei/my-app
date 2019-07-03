import React from 'react';
import './Recipe.css'
// import axios from 'axios'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
class Recipe extends React.Component {
    state = {
        lists: [],

    }
    render() {
        return (
            <div>
                <div className="header">
                    <Link to={{
                        pathname: "/",
                    }} className="header_a1" title="美食天下">
                        <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                    <a className="header_at" href="https://m.meishichina.com/recipe/">
                        <h1>菜谱</h1>
                    </a>
                    <a className="header_a2" target="blank" href="https://home.meishichina.com/watch.php?id=64" title="官方下载">
                        <img src="https://i3.meishichina.com/static/wap/down.png" height="26" alt="" /></a>
                </div>
                <div className="nav2 tab3">
                    <Link title="菜谱分类" to={{ pathname: '/recipe' }} className="on"><span>菜谱分类</span></Link>
                    <Link title="家常菜" to={{ pathname: '/jiachangcai' }}><span>家常菜</span></Link>
                    <Link title="食材大全" to={{ pathname: '/ingredient' }}><span>食材大全</span></Link>
                </div>

                <div className="right" >
                    <div className="hot42" style={{ width: '100%' }}>
                        <ul>
                            <li><a id="mtop" href="https://m.meishichina.com/recipe/all/elite/"><i></i>最新推荐</a></li>
                            <li><a href="https://m.meishichina.com/recipe/hot/week/"><i></i>一周热门</a></li>
                            <li><a href="https://m.meishichina.com/recipe/all/"><i></i>全部菜谱</a></li>
                            <li><a href="https://m.meishichina.com/recipe/all/hot/"><i></i>最受欢迎</a></li>
                            <li><a href="https://m.meishichina.com/recipe/pop/"><i></i>人气菜谱</a></li>
                            <li><a href="https://m.meishichina.com/recipe/pop/star/"><i></i>明星菜谱</a></li>
                        </ul>
                    </div>
                    <div className="b_hr"></div>
                    <div className="tag_right_item" id="item0" style={{ paddingTop: '20px' }}>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/zaocan/" title="早餐">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/fenleituijian/zaocan.png?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/static/appimage/fenleituijian/zaocan.png?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} alt="" />
                                <span>早餐</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/shoushen/" title="瘦身">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/fenleituijian/shoushen.png?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/static/appimage/fenleituijian/shoushen.png?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} alt="" />
                                <span>瘦身</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/kuaishoucai/" title="快手菜">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/fenleituijian/kuaishoucai.png?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/static/appimage/fenleituijian/kuaishoucai.png?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} alt="" />
                                <span>快手菜</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/xiaji/" title="夏季食谱">
                                <img className="imgLoad" src="https://static.meishichina.com/img/appicon/chunjishipu.png"
                                    data-src="https://static.meishichina.com/img/appicon/chunjishipu.png" style={{ display: 'inline-block' }} alt="" />
                                <span>夏季食谱</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/gaoyanzhi/" title="高颜值">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/fenleituijian/gaoyanzhi.png?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/static/appimage/fenleituijian/gaoyanzhi.png?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} alt="" />
                                <span>高颜值</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/recipe/category/xiaoqingxin/" title="小清新">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/fenleituijian/xiaoqingxin.png?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/static/appimage/fenleituijian/xiaoqingxin.png?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} alt="" />
                                <span>小清新</span>
                            </a>
                        </div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/chuancai/">川菜</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/zizhishicai/">自制食材</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/jiangpaoyancai/">酱泡腌菜</a></div>
                    </div>
                    <div className="tag_right_item" id="item1">
                        <div className="tag_head"><span>常见菜式</span></div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/recai/" title="热菜">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324158433913.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324158433913.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>热菜</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/liangcai/" title="凉菜">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324111451113.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324111451113.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>凉菜</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/tang/" title="汤类">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151323892949713.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151323892949713.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>汤类</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/zhushi/" title="主食">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151323883529013.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151323883529013.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>主食</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/xiaochi/" title="小吃">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324007619413.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324007619413.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>小吃</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/zizhishicai/" title="自制食材">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324028643813.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324028643813.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>自制食材</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/jiangpaoyancai/" title="泡酱腌菜">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324008689213.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324008689213.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>泡酱腌菜</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/chuangyicai/" title="创意菜">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324057579913.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324057579913.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>创意菜</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/recipe/category/lanrenshipu/" title="懒人食谱">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324080136713.jpg?x-oss-process=style/c180"
                                    data-src="https://i3.meishichina.com/attachment/recipe/2017/12/14/20171214151324080136713.jpg?x-oss-process=style/c180"
                                    style={{ display: 'inline-block' }} />
                                <span>懒人食谱</span>
                            </a>
                        </div>
                        <div className="b_hr"></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/yinpin/">饮品</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/geng/">羹类</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/huoguo/">火锅</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/xican/">西餐</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/jiachang/">家常菜</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/gaodian/">糕点</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/hongbei/">烘焙</a></div>
                        <div className="tag_txt"><a href="https://m.meishichina.com/recipe/category/jiqiao/">技巧类</a></div>
                        <div className="tag_txt"><a className="more">更多</a></div>
                    </div>
                </div>

                <Footer />
            </div>

        )
    }
    // componentWillMount(){
    //     const lists =  axios.get('https://m.meishichina.com/ajax/ajax.php?ac=admobile&op=getTimeLineList')
    //     console.log(lists)
    //     this.setState({
    //         lists
    //     })
    // }
}

export default Recipe