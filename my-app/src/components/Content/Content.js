import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import LoadMore from '../../components/LoadMore/LoadMore';
class Content extends React.Component {
    state = {
        news: [],
        picset: [],
        page: 1,
        loadingStatus: 'show',
        
    }
    render() {
        // console.log(this)
        return (
            <div className="timeline">
                <ul id="timeline">
                    {
                        this.state.news.map((item, index) => {
                            // console.log(item.templetid)
                            if (item.templetid == 1) {
                                return (
                                    <li key={index} className={'t' + item.templetid}
                                        data-id="56019">
                                        <a href="###" className="clear" target="_blank">
                                            <div><b><img src={item.pic640} /></b></div>
                                            <h2>{item.subject}</h2>
                                            <p>{item.description}</p>
                                            <span>{item.remark}</span>
                                        </a>
                                    </li>
                                )
                            } else if (item.templetid == 2) {
                                return (
                                    <li key={index} className={'t' + item.templetid}
                                        data-id="56019">
                                        <a href="###" className="clear" target="_blank">
                                            <h2>{item.subject}</h2>
                                            {
                                                item.picset.map((i, index) => {
                                                    return (<div key={index}><b><img src={i} /></b></div>)
                                                })
                                            }
                                            <span>{item.remark}</span>
                                        </a>
                                    </li>
                                )
                            } else if (item.templetid == 3) {
                                return (
                                    <li key={index} className={'t' + item.templetid}
                                        data-id="56019">
                                        <a href="###" className="clear" target="_blank">
                                            <h2>{item.subject}</h2>
                                            <div >
                                                <b style={{ height:'100%'}}><img src={item.pic} /></b>
                                            </div>
                                            <span>{item.remark}</span>
                                        </a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <div style={
                    { display: this.state.loadingStatus == 'show' || this.state.news.length >= 10 ? 'none' : 'block' }
                } onClick={
                    this.loadMore.bind(this)
                } className="weui-panel__ft">
                    <a href="###" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
                <Loading status={this.state.loadingStatus} />
                <LoadMore status={this.state.loadingStatus} limit={this.state.news.length} />
            </div>
        )
    }
    componentDidMount() {
        this.loadMore();
        
    }
 
    async loadMore() {
        this.setState({
            loadingStatus: 'show'
        })
        let news;
        if (sessionStorage.getItem('share')) {
            news = JSON.parse(sessionStorage.getItem('share'))
        } else {
            news = (await axios.get('https://www.easy-mock.com/mock/5cfe16dba34d9a70829f61a6/example_copy/mstx',
                {
                    params: {
                        page: this.state.page,
                        limit: 10,
                    }
                }
            )).data.data
            sessionStorage.setItem('share', JSON.stringify(news))
        }

        // await new Promise((resolve) => { setTimeout(() => { resolve() }, 1000) })
        // console.log(news)
        this.setState({
            page: ++this.state.page,
            news: [...this.state.news, ...news],
            loadingStatus: 'hide'

        })
    }
}
export default connect((state) => {
    return state
})(Content)