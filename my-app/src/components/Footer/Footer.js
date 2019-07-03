import React from 'react';
import { connect } from 'react-redux';
class Footer extends React.Component {
    constructor(props){
        super(props)
        this.top = this.top.bind(this)
    }
    state = {
        bool:!0,
        style:{
            display:'none'
        }
    }
    render() {
        // console.log(this)
        return (
            <div className="footer">
                版权所有 © 2004-2019 美食天下 保留所有权利<br />
                京公网安备 11010502031041号 / 京ICP证090244号 / 京ICP备10020153号
            <div className="go_top"  onClick={this.top.bind(this)} style={this.state.style}><div></div></div>
            </div>
        )
    }
    componentDidMount(){
        window.onscroll=(e)=>{
            if(window.scrollY > 300){
                this.setState({
                   style: {display:'inline'}
                })
            }else{
                this.setState({
                    style: {display:'none'}
                 })
            }
            // console.log(window.scrollY)
        };
        
    }
    top(){
        // console.log(111)
        document.documentElement.scrollTop = 0
    }
}
export default connect((state) => {
    return state
})(Footer)