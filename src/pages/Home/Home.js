import React, { useState, useEffect } from 'react';
import './home.css'
import bck1 from '../../Assets/homeB1.png'
import search_ from '../../Assets/search.png'
import axios from 'axios';


const Home = () => {

    const [short, setShort] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);
    const [collageCount, setCollageCount] = useState([]);
    const [stateCount, setStateCount] = useState([]);
    const [studentCount, setStudentCount] = useState();
    const [result, setResult] = useState([
        {
            title : "first chapter in my college",
            author : "Talha",
            tags : "#college, #firstchap"
        },
        {
            title : "second chapter in my university",
            author : "Talha",
            tags : "#university, #secondchap"
        },
        {
            title : "third chapter in my university",
            author : "Talha",
            tags : "#university, #secondchap"
        },
        {
            title : "fourth chapter in my university",
            author : "Talha",
            tags : "#university, #secondchap"
        }
    ]);

    useEffect(() => {
        axios.get("https://se-web-app.herokuapp.com/services/uploadpic")
            .then((res) => {
                console.log(res.data);
                setShort(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    useEffect(() => {
        axios.get("https://se-web-app.herokuapp.com/services/users")
            .then((res) => {
                console.log(res.data);
                res.data.map((item) => {
                    if (stateCount.indexOf(item.state) === -1) {
                        stateCount.push(item.state);
                    }
                    if(collageCount.indexOf(item.college) === -1){
                        collageCount.push(item.college);
                    }
                })
                setStateCount(stateCount);
                setCollageCount(collageCount);
                setStudentCount(res.data.length);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    console.log(collageCount);
    console.log(stateCount);
    const handleSearch = (e) => {
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
                <div className="col-12 col-md-6">
                    <img src={bck1} className="img-1"/>
                </div>
                <div className="col-12 col-md-6 searchbar form-inline">
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
                {
                    short.map(item => {
                       return( 
                            <div className="col-5 col-md-3 shorts">
                                <img src={`https://se-web-app.herokuapp.com/${item.name}`} className="img-short" />
                            </div>
                       );
                    })
                }
            </div>

            <div className="about-list-data-wrapper row">
                <div className="col-12 col-md-4 data">
                    <p className="data-head">Our Users</p>
                    <p className="data-desc">
                    <h4>Our data makes our webite more real and legitimate!</h4>
                        <div className="info-desc">
                            <p>The web site currently has students from {collageCount.length} colleges</p>
                            <p>which account to total {studentCount} students</p>
                            <p>from {stateCount.length} states of the union of India</p>
                        </div>
                    <em>* Be the next one to join us and make new connections,find new buddy and add alot more to your projects, intern ...</em>
                    </p>
                </div>
                <div className="col-12 col-md-4 about">
                    <p className="about-head">About Us</p>
                    <p className='about-desc'>Collab - With specific focus on that section which generally from the rural setting. This site is a common integration among students of different institutions which aims to provide unfeigned content.
                    It is platform where one can share their views, news or anything relatable to college/institute which can be beneficial for others also.It also helps to settle and make connections with the students which can help them in things other than learning like one can find his/her buddy for being roomate/flatmate. </p>
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