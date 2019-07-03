import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Hot extends React.Component {
    state = {
        tabs: [{
            title: '新菜谱',
            url: '/new'
        },
        {
            title: '人气菜谱',
            url: '/pop'
        },
        {
            title: '菜谱分类',
            url: '/recipe'
        },
        {
            title: '菜单',
            url: '/collect'
        },
        {
            title: '家常菜',
            url: '/jiachangcai'
        }]
    }
    render() {
        console.log(this)
        return (
            <div className="hot41">
                <ul>
                    {
                        this.state.tabs.map((item,index)=>{
                            return(
                                <li key={index} ><Link to={{ pathname: item.url }} ><i></i>{item.title}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect((state) => {
    return state
})(Hot)