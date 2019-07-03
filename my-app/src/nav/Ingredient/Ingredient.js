import React from 'react';
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
class Ingredient extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Link to={{
                        pathname: "/",
                    }} className="header_a1" title="美食天下">
                        <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                    <a className="header_at" href="https://m.meishichina.com/recipe/">
                        <h1>食材</h1>
                    </a>
                    <a className="header_a2" target="blank" href="https://home.meishichina.com/watch.php?id=64" title="官方下载">
                        <img src="https://i3.meishichina.com/static/wap/down.png" height="26" alt="" /></a>
                </div>
                <div className="nav2 tab3">
                    <Link title="菜谱分类" to={{ pathname: '/recipe' }} ><span>菜谱分类</span></Link>
                    <Link title="家常菜" to={{ pathname: '/jiachangcai' }} ><span>家常菜</span></Link>
                    <Link title="食材大全" to={{ pathname: '/ingredient' }} className="on"><span>食材大全</span></Link>
                </div>

                <div className="right" >
                    <div className="tag_right_item" id="item0" style={{ paddingTop: '20px' }}>
                        <div className="tag_img">
                            <a id="mtop" href="https://m.meishichina.com/ingredient/huanggua/" title="黄瓜">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/huanggua.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/huanggua.jpg" style={{ display: 'inline-block' }} />
                                <span>黄瓜</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/xihongshi/" title="西红柿">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/xihongshi.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/xihongshi.jpg" style={{ display: 'inline-block' }} />
                                <span>西红柿</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/caihua/" title="菜花">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/caihua.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/caihua.jpg" style={{ display: 'inline-block' }} />
                                <span>菜花</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/donggua/" title="冬瓜">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/donggua.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/donggua.jpg" style={{ display: 'inline-block' }} />
                                <span>冬瓜</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/qiezi/" title="茄子">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/qiezi.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/qiezi.jpg" style={{ display: 'inline-block' }} />
                                <span>茄子</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/xigua/" title="西瓜">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/xigua.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/xigua.jpg" style={{ display: 'inline-block' }} />
                                <span>西瓜</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/jichi/" title="鸡翅">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/jichi.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/jichi.jpg" style={{ display: 'inline-block' }} />
                                <span>鸡翅</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/xia/" title="虾">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/xia.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/xia.jpg" style={{ display: 'inline-block' }} />
                                <span>虾</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/qingkoubei/" title="青口贝">
                                <img className="imgLoad" src="https://i3.meishichina.com/static/appimage/shicaituijian/qingkoubei.jpg" data-src="https://i3.meishichina.com/static/appimage/shicaituijian/qingkoubei.jpg" style={{ display: 'inline-block' }} />
                                <span>青口贝</span>
                            </a>
                        </div>
                        <div className="b_hr"></div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/youyu/" title="鱿鱼">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322160339514242015.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322160339514242015.jpg" style={{ display: 'inline-block' }} />
                                <span>鱿鱼</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/jixiongrou/" title="鸡胸肉">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/23/20120323142546275392836.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/23/20120323142546275392836.jpg" style={{ display: 'inline-block' }} />
                                <span>鸡胸肉</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/shenghao/" title="生蚝">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2013/09/24/20130924161137257171678.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2013/09/24/20130924161137257171678.jpg" style={{ display: 'inline-block' }} />
                                <span>生蚝</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/paigu/" title="排骨">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143633777716619.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143633777716619.jpg" style={{ display: 'inline-block' }} />
                                <span>排骨</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/hali/" title="蛤蜊">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322155341304424721.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322155341304424721.jpg" style={{ display: 'inline-block' }} />
                                <span>蛤蜊</span>
                            </a>
                        </div>
                        <div className="tag_img">
                            <a href="https://m.meishichina.com/ingredient/qianshi/" title="芡实">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/23/20120323172324218736083.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/23/20120323172324218736083.jpg" style={{ display: 'inline-block' }} />
                                <span>芡实</span>
                            </a>
                        </div>
                    </div>
                    <div className="tag_right_item" id="item1">
                        <div className="tag_head"><span>猪肉</span></div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhurou/" title="猪肉">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322142225412671609.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322142225412671609.jpg" style={{ display: 'inline-block' }} />
                                <span>猪肉</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/liji/" title="里脊">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322142555689922262.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322142555689922262.jpg" style={{ display: 'inline-block' }} />
                                <span>里脊</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuxiaopai/" title="猪小排">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/20/20120320170321362856333.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/20/20120320170321362856333.jpg" style={{ display: 'inline-block' }} />
                                <span>猪小排</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhudapai/" title="猪大排">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/20/20120320170730342948635.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/20/20120320170730342948635.jpg" style={{ display: 'inline-block' }} />
                                <span>猪大排</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/paigu/" title="排骨">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143633777716619.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143633777716619.jpg" style={{ display: 'inline-block' }} />
                                <span>排骨</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuti/" title="猪蹄">
                                <img className="imgLoad" src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143804634147681.jpg" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322143804634147681.jpg" style={{ display: 'inline-block' }} />
                                <span>猪蹄</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhudu/" title="猪肚">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322102114619887232.jpg" />
                                <span>猪肚</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/wuhuarou/" title="五花肉">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322102617160316067.jpg" />
                                <span>五花肉</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuxue/" title="猪血">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322105119193696298.jpg" />
                                <span>猪血</span>
                            </a>
                        </div>
                        <div className="b_hr"></div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhupai/" title="猪排">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322173007507230103.jpg" />
                                <span>猪排</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhujiao/" title="猪脚">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322173132911466496.jpg" />
                                <span>猪脚</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhugan/" title="猪肝">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2018/03/19/20180319152143063146612.jpg" />
                                <span>猪肝</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuyao/" title="猪腰">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322173617999850764.jpg" />
                                <span>猪腰</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zipai/" title="子排">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322173758583859007.jpg" />
                                <span>子排</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuzhou/" title="猪肘">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322173839917681449.jpg" />
                                <span>猪肘</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuxin/" title="猪心">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322174039436191992.jpg" />
                                <span>猪心</span>
                            </a>
                        </div>
                        <div className="tag_img ">
                            <a href="https://m.meishichina.com/ingredient/zhuxiaochang/" title="猪小肠">
                                <img className="imgLoad" src="//static.meishichina.com/v6/img/blank.gif" data-src="https://i3.meishichina.com/attachment/ingredient/2012/03/22/20120322174119136736721.jpg" />
                                <span>猪小肠</span>
                            </a>
                        </div>
                        <div className="tag_txt"><a className="more">更多</a></div>
                    </div>
                </div>


                <Footer />
            </div>

        )
    }
}

export default Ingredient