import React from 'react';
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
import './Article.css'
class Article extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Link to={{
                        pathname: "/",
                    }} className="header_a1" title="美食天下">
                        <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                    <a className="header_at" href="https://m.meishichina.com/recipe/">
                        <h1>饮食健康</h1>
                    </a>
                    <a className="header_a2" target="blank" href="https://home.meishichina.com/watch.php?id=64" title="官方下载">
                        <img src="https://i3.meishichina.com/static/wap/down.png" height="26" alt="" /></a>
                </div>
                <div className="nav3">
                    <h2>首页</h2>
                    <span><a className="" href="https://m.meishichina.com/article/class/17/">常识</a>
                        <a className="" href="https://m.meishichina.com/article/class/18/">瘦身</a>
                        <a className="" href="https://m.meishichina.com/article/class/19/">母婴</a>
                        <a className="" href="https://m.meishichina.com/article/class/20/">食疗</a>
                        <a className="" href="https://m.meishichina.com/article/class/21/">功效</a></span>
                </div>
                <div className="alist_p1 mt10">
                    <ul>
                        <li>
                            <a href="https://m.meishichina.com/article/222573/">
                                <div className="detail">
                                    <h2>缓解抑郁情绪，饮食也可助力</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222558/">
                                <div className="detail">
                                    <h2>祛痰止咳，首选雪梨</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222574/">
                                <div className="detail">
                                    <h2>夏季出门，头发也要做好防晒</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222580/">
                                <div className="detail">
                                    <h2>夏天要减肥，露出你的小蛮腰！</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222579/">
                                <div className="detail">
                                    <h2>男人也会贫血，吃什么好？</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222578/">
                                <div className="detail">
                                    <h2>糖尿病患者饮食的9大误区</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222577/">
                                <div className="detail">
                                    <h2>老人怎么样吃肉最健康？</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222575/">
                                <div className="detail">
                                    <h2>五种刮油食物最适合早餐！</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222557/">
                                <div className="detail">
                                    <h2>健康减肥，晚餐就要这么吃</h2>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/article/222554/">
                                <div className="detail">
                                    <h2>夏季瘦身，首推6款食物</h2>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="page"><a href="https://m.meishichina.com/article/health/2/">下一页</a>
                    <b>(1/6168)</b></div>
                <div style={{height:'10px'}}></div>
                <div className="rc3 mt20 clear">
                    <ul>
                        <li><div><a href="https://m.meishichina.com/mofang/hongshaorou/"><span>
                            <img src="https://i3.meishichina.com/attachment/mofang/2015/11/26/201511261448511476963.jpg?x-oss-process=style/c180" /></span>红烧肉</a></div></li>
                        <li><div><a href="https://m.meishichina.com/mofang/tangcupaigu/"><span>
                            <img src="https://i3.meishichina.com/attachment/mofang/2014/12/15/201412151418633722494.jpg?x-oss-process=style/c180" /></span>糖醋排骨</a></div></li>
                        <li><div><a href="https://m.meishichina.com/mofang/kelejichi/"><span>
                            <img src="https://i3.meishichina.com/attachment/mofang/2014/12/15/201412151418629886725.jpg?x-oss-process=style/c180" /></span>可乐鸡翅</a></div></li>
                    </ul>
                </div>

                <Footer />
            </div>

        )
    }
}

export default Article