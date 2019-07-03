import React from 'react';
import { connect } from 'react-redux';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
class Swiperr extends React.Component {
    state = {
        imgUrl: [
            { img: 'https://i3.meishichina.com/attachment/magic/2019/06/21/2019062115610809268488197577.jpg' },
            { img: 'https://i3.meishichina.com/attachment/magic/2019/06/20/2019062015609960735098197577.jpg' },
            { img: 'https://i3.meishichina.com/attachment/magic/2019/06/20/2019062015610150544128197577.jpg' },
            { img: 'https://i3.meishichina.com/attachment/magic/2019/05/07/2019050715572240918698197577.jpg' },
            { img: 'https://i3.meishichina.com/attachment/magic/2019/04/25/2019042515561572502818197577.jpg' }
        ]
    }
    render() {
        console.log(this)

        return (
            <div className="index_img"style={{ width: '100%',height:'187.5px' }}>
                {
                    <div className="swiper-container " style={{ width: '100%' ,height:'100%'}}>
                        <div className="swiper-wrapper " style={{ width: '100%' ,height:'100%'}}>
                            {
                                this.state.imgUrl.map((item, index) => {
                                    return (
                                    <div key={index} className="swiper-slide " style={{ 
                                        width: '100%' ,
                                    height:'100%' ,
                                    background:`url(${item.img})`,
                                    backgroundSize:'cover',
                                    }}>
                                        {/* <img src={item.img} style={{ width: '375px' ,height:'187.5px' ,backgroundSize:'cover'}} /> */}
                                    </div>)

                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                }
               
            </div>
        )
    }
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });
    }
}
export default connect((state) => {
    return state
})(Swiperr)