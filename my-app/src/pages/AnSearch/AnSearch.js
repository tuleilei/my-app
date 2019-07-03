import React from 'react';
import { connect } from 'react-redux'
import './AnSearch.css'
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
class AnSearch extends React.Component {
    state = {

    }
    render() {
        return (
            <div>
                <div className="header bottomborder">
                <Link to={{
                        pathname: "/",
                    }} className="header_a1" title="美食天下">
                        <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                    <a className="header_at" href="https://m.meishichina.com/search/"><h1>搜索</h1>
                    </a>
                    <a href="###" className="header_more2">
                        <i></i>
                    </a>
                    <div id="mask_nav" style={{ display: 'none' }}>
                        <ul className="unav clear" style={{ display: 'none' }}>
                            <li><a title="退出登录" href="https://m.meishichina.com/ajax/ajax.php?ac=index&amp;op=index&amp;type=logout&amp;
                            refer=//m.meishichina.com/">退出登录</a></li>
                        </ul>
                        <ul className="mnav clear" style={{ display: 'none' }}>
                            <li><a title="首页" href="https://m.meishichina.com/">首页</a></li>
                            <li><a title="菜谱" href="https://m.meishichina.com/recipe/">菜谱</a></li>
                            <li><a title="食材" href="https://m.meishichina.com/ingredient/">食材</a></li>
                            <li><a title="话题" href="https://m.meishichina.com/pai/">话题</a></li>
                            <li><a title="健康" href="https://m.meishichina.com/article/health/">健康</a></li>
                            <li><a title="专题" href="https://m.meishichina.com/mofang/">专题</a></li>
                            <li><a title="搜索" href="https://m.meishichina.com/search/">搜索</a></li>
                        </ul>
                        <ul className="share_nav1 clear" style={{ display: 'none' }}>
                            <li>请点击右上角进行分享</li>
                        </ul>
                        <ul className="share_nav2 clear" style={{ display: 'none' }}>
                            <li>请在浏览器中找到类似图标分享</li>
                            <li>
                                <img width="30" height="30" src="//i3.meishichina.com/static/wap/pai_share1.png" alt=""/>&nbsp;&nbsp;
                                <img width="30" height="30" src="//i3.meishichina.com/static/wap/pai_share2.png" alt=""/>&nbsp;&nbsp;
                                <img width="30" height="30" src="//i3.meishichina.com/static/wap/pai_share3.png" alt=""/>
                            </li>
                        </ul>
                        <div className="close">×</div>
                    </div>
                </div>
                <p>
                    <br /><br />&nbsp;<br />
                </p>
                <div className="search_nav">
                    <a className="on" href="https://m.meishichina.com/search/recipe/" title="搜索菜谱"><span>菜谱</span></a>
                    <a href="https://m.meishichina.com/search/ingredient/" title="搜索食材" ><span>食材</span></a>
                </div>
                <div className="wap_a_searchbox">
                    <form action="//m.meishichina.com/search/" method="post" id="wap_a_searchform">
                        <div>
                            <input type="text" id="wap_a_search" placeholder="搜索菜谱..."  />
                            <a id="wap_a_search_Btn" href="###">
                                <span>搜索</span>
                            </a>
                        </div>
                    </form>
                </div>
                <div className="search_link">
                    <a href="https://m.meishichina.com/recipe/"><i></i>菜谱分类</a>
                    <a href="https://m.meishichina.com/jiachangcai/"><i></i>家常菜</a>
                    <a href="https://m.meishichina.com/ingredient/"><i></i>食材大全</a>
                </div>
                <p>
                    <br /><br />&nbsp;<br /><br />
                </p>
                <div className="s2">热门搜索</div>
                <div className="blist_p1 clear">
                    <ul>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/早餐/">早餐</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/鱼/">鱼</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/红烧肉/">红烧肉</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/牛肉/">牛肉</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/豆腐/">豆腐</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/排骨/">排骨</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/汤/">汤</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/虾/">虾</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/糖醋排骨/">糖醋排骨</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/可乐鸡翅/">可乐鸡翅</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/南瓜/">南瓜</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/土豆/">土豆</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/茄子/">茄子</a>
                        </li>
                        <li>
                            <a href="https://m.meishichina.com/search/recipe/火锅/">火锅</a>
                        </li>
                    </ul>
                </div>
                <div style={{height:'10px'}}></div>
                <div className="rc3 mt20 clear">
                    <ul>
                        <li><div><a href="https://m.meishichina.com/mofang/hongshaorou/"><span>
                            <img src="https://i3.meishichina.com/attachment/mofang/2015/11/26/201511261448511476963.jpg?x-oss-process=style/c180" alt=""/></span>红烧肉</a></div></li>
                        <li><div><a href="https://m.meishichina.com/mofang/tangcupaigu/"><span><img src="https://i3.meishichina.com/attachment/mofang/2014/12/15/201412151418633722494.jpg?x-oss-process=style/c180" alt=""/></span>糖醋排骨</a></div></li>
                        <li><div><a href="https://m.meishichina.com/mofang/kelejichi/"><span><img src="https://i3.meishichina.com/attachment/mofang/2014/12/15/201412151418629886725.jpg?x-oss-process=style/c180" alt=""/></span>可乐鸡翅</a></div></li>
                    </ul>
                </div>
                <div style={{height:'20px'}}></div>
                <div className="blist_p2 mt20 clear">
                    <ul>
                        <li><a href="https://m.meishichina.com/recipe/all/elite/" title="热门菜谱">热门菜谱</a></li>
                        <li><a href="https://m.meishichina.com/recipe/level/2/" title="新手入门">新手入门</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/kuaishoucai/" title="快手菜">快手菜</a></li>
                        <li><a href="https://m.meishichina.com/jiachangcai/" title="家常菜">家常菜</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/recai/" title="热菜">热菜</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/liangcai/" title="凉菜">凉菜</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/tanggeng/" title="汤羹">汤羹</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/zhushi/" title="主食">主食</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/xiaochi/" title="小吃">小吃</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/hongbei/" title="烘焙">烘焙</a></li>
                        <li><a href="https://m.meishichina.com/recipe/category/jiangpaoyancai/" title="泡酱腌菜">泡酱腌菜</a></li>
                        <li><a href="https://m.meishichina.com/collect/46013/" title="自制食材">自制食材</a></li>
                    </ul>
                </div>
                <div className="ca">
                    <a href="https://m.meishichina.com/recipe/">查看全部菜谱分类</a>
                </div>
                <div className="s2">大家都在做</div>
                <div className="rc3 clear">
                    <ul>
                        <li><div><a href="https://m.meishichina.com/recipe/category/miantiao/"><span><img src="https://i3.meishichina.com/attachment/recipe/2013/09/15/20130915141144890440061.jpg?x-oss-process=style/c180" alt=""/></span>面条</a></div></li>
                        <li><div><a href="https://m.meishichina.com/recipe/category/jiaozi/"><span><img src="https://i3.meishichina.com/attachment/recipe/2016/09/23/c640_20160923147459509576713.jpg?x-oss-process=style/c180" alt=""/></span>饺子</a></div></li>
                        <li><div><a href="https://m.meishichina.com/recipe/category/zaocan/"><span><img src="https://i3.meishichina.com/attachment/recipe/2016/11/07/20161107147851182459613.jpg?x-oss-process=style/c180" alt=""/></span>早餐</a></div></li>
                    </ul>
                </div>
                <div style={{height:'10px'}}></div>
                
                <div className="blist_p2 clear mt20">
                    <ul>
                        <li><a href="https://m.meishichina.com/recipe/" title="菜谱">菜谱</a></li>
                        <li><a href="https://m.meishichina.com/ingredient/" title="食材"><span>食材</span></a></li>
                        <li><a href="https://m.meishichina.com/mofang/" title="专题"><span>专题</span></a></li>
                        <li><a href="https://m.meishichina.com/collect/" title="菜单"><span>菜单</span></a></li>
                        <li><a href="https://m.meishichina.com/pai/" title="话题"><span>话题</span></a></li>
                        <li><a href="https://m.meishichina.com/article/health/" title="健康"><span>健康</span></a></li>
                        <li><a href="https://m.meishichina.com/zhen/" title="珍选"><span>珍选</span></a></li>
                        <li><a href="https://m.meishichina.com/search/" title="搜索"><span>搜索</span></a></li>
                    </ul>
                </div>
                <div className="ca">
                    <a href="https://m.meishichina.com">美食天下首页</a>
                </div>
              <Footer/>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(AnSearch)