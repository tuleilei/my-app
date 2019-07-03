import React from 'react';
import Footer from '../../components/Footer/Footer'
import { Link } from "react-router-dom";
class Mofang extends React.Component {
    render() {
        return (
            <div>
                 <div className="header">
                    <Link to={{
                        pathname: "/",
                    }} className="header_a1" title="美食天下">
                        <img src="https://static.meishichina.com/v6/img/lib/logo.png" height="22" alt="美食天下" /></Link>
                    <a className="header_at" href="https://m.meishichina.com/recipe/">
                        <h1>专题</h1>
                    </a>
                    <a className="header_a2" target="blank" href="https://home.meishichina.com/watch.php?id=64" title="官方下载">
                        <img src="https://i3.meishichina.com/static/wap/down.png" height="26" alt="" /></a>
                </div>
                <div style={{ height: '500px' }}></div>
                <Footer />
            </div>

        )
    }
}

export default Mofang