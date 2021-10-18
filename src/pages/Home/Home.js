import React, { useState } from 'react';
import './home.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/footer';

const Home = () => {

    const [search,setSearch] = useState('');

    const  handleSearch = () => {

    }

    const handleSearchChange = () => {

    }

    return ( 
        <div className="container"> 
            {/* <Navbar />   */}
            <div className="row">
                <div className="col-12 searchbar form-inline">
                    <input className="form-control" onChange={ handleSearchChange } />
                    <button className="btn btn-success" onClick={ handleSearch } >Search</button>
                </div>
            </div>

            <div className="shorts-wrapper">
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
                <div className="col-3 shorts"></div>
            </div>

            <div className="about-list-data-wrapper row">
                <div className="col-12 col-md-4 data">
                    <p className="data-head">Our Users</p>
                    <p className="data-desc">
                    ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus enim. Quisque sed lorem malesuada, porttitor ligula in, fringilla lorem. Praesent id urna porta, efficitur ante vitae, dapibus lacus. Curabitur non porttitor metus. Integer eget erat ultrices, placerat risus eu, elementum velit. In effi
                    </p>
                </div>
                <div className="col-12 col-md-4 about">
                    <p className="about-head">About Us</p>
                    <p className='about-desc'>lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non tellus enim. Quisque sed lorem malesuada, porttitor ligula in, fringilla lorem. Praesent id urna porta, efficitur ante vitae, dapibus lacus. Curabitur non porttitor metus. Integer eget erat ultrices, placerat risus eu, elementum velit. In efficitur consequat lacinia. Donec metus velit, eleifend quis arcu eu, porttitor suscipit massaconvallis. Phasellus tincidunt justo in quam hendrerit mollis. Curabitur non neque ut purus dapibus sagittis. Curabitur bibendum eros tellus, id facilisis dolor fringilla quis. Quisque molestie tincidunt laoreet. </p>
                </div>
                <div className="col-12 col-md-4 post-list">
                    <p className="collab-head">On the Top</p>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                    <div className="articles-list"><p className="link-article">
                        eleifend quis arcu eu, porttitor suscipit massa
                        <p className="author">Author name</p>
                        <p className="tags">#abc, #def, #ghf</p>
                    </p></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default Home;