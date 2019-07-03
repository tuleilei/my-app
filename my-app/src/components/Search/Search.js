import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const data = {
    span: '搜索',
    url:'/ansearch'
}
class Search extends React.Component {
    // cancel = "取消"
    // 有状态
    state = {
        // bool: !0,
        // searchInputValue: ''
    }
    
    render() {
        console.log(this)
        return (
            <div className="wap_searchbox">
                <form action="//m.meishichina.com/search/" method="post" id="wap_a_searchform">
                    <div>
                        <input type="text" id="wap_a_search" placeholder="搜索菜谱、食材或菜单..." />
                        <Link id="wap_a_search_Btn" to={{
                            pathname:data.url
                        }}>
                            <span>{data.span}</span>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }


}
export default connect((state) => {
    return state
})(Search)