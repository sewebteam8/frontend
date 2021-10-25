import React, { useState } from 'react';
import './home.css'
import bck1 from '../../Assets/homeB1.png'
import search_ from '../../Assets/search.png'


const Home = () => {

    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([]);
    const [result,setResult] = useState([
        {
            title : "first chapter in my college",
            author : "Talha",
            tags : "#college, #firstchap"
        },
        {
            title : "second chapter in my university",
            author : "Talha",
            tags : "#university, #secondchap"
        }
    ]);
    

    const  handleSearch = (e) => {
        for(let i = 0; i < result.length; i++){
            if(result[i].title.includes(search)){
                setFilter(filter.concat(result[i]));
            }
            else if(result[i].author.includes(search)){
                setFilter(filter.concat(result[i]));
            }
            else if(result[i].tags.includes(search)){
                setFilter(filter.concat(result[i]));
            }
        }
    }

    const handleSearchChange = (e) => {
        if(e.currentTarget.value.length === 0){
            setFilter([]);
        }
        setSearch(e.currentTarget.value)
    }   

    return ( 
        <div className="container-fluid home"> 
            <div className="row">
                <div className="col-6">
                    <img src={bck1} className="img-1"/>
                </div>
                <div className="col-6 searchbar form-inline">
                    <div className="home-head">Collab</div>
                    <div className="search">
                        <input className="form-control search-input" onChange={ handleSearchChange } value={search} />
                        <span className="search-btn" onClick={ handleSearch } >
                            <img src={search_} className="search_img" />
                        </span>
                    </div>
                    
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
                        {   
                            filter.length === 0 && result.map(item => {
                                return (<div className="articles-list"><p className="link-article">
                                    {item.title}
                                    <p className="author">{item.author}</p>
                                    <p className="tags">{item.tags}</p>
                                </p></div>)
                            })

                        }

                        {
                            filter.length !== 0  && filter.map(item => {
                                return (<div className="articles-list"><p className="link-article">
                                    {item.title}
                                    <p className="author">{item.author}</p>
                                    <p className="tags">{item.tags}</p>
                                </p></div>)
                            })
                        }
                </div>
            </div>
        </div>
    );
}
 
export default Home;