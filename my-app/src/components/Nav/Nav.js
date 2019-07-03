import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
class Nav extends React.Component {
    state = {
        tabs: [{
            title: '菜谱',
            url: '/recipe'
        },
        {
            title: '食材',
            url: '/ingredient'
        },
        {
            title: '健康',
            url: '/article'
        },
        {
            title: '话题',
            url: '/pai'
        },
        {
            title: '专题',
            url: '/mofang'
        }]
    }
    render() {
        return (
            <div className="nav1">
                {
                    this.state.tabs.map((item, index) => {
                        return (
                            <Link to={{ pathname: item.url }} key={index} >{item.title}</Link>
                        )
                    })
                }


            </div>

        )
    }
}

export default connect((state) => {
    return state
})(Nav)