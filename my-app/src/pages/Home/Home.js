import React, {Component} from 'react'
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Search from '../../components/Search/Search';
import Swiper from '../../components/Swiper/Swiper';
import Hot from '../../components/Hot/Hot';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
export default class Home extends Component {
    render(){
        return (
            <div>
                <Header  />
                <Nav />
                <Search />
                <Swiper/>
                <Hot/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}