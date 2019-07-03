import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to={{
                    pathname: "/",
                }} className="header_a1"  title="美食天下">
                    <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                <div className="header_a2" target="blank"  title="官方下载">
                    <img src="https://i3.meishichina.com/static/wap/down.png" height="26" alt="" /></div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Header)