import React from 'react';
import Header from "../../components/Header";
import RestaurantHeader from "../../components/RestaurantHeader";
import Restaurant from "../../components/Restaurant";
import {Link} from "react-router-dom";

const restaurants = {
    count: 2,
    rows:[{id: 1, title:'Dishoom', menuList:[{id:1, name: 'sushi'}], rating:{stars: 4, count:1}, image:'image'},
        {id: 2, title:'Homeslice', menuList:[{id:1, name: 'pizza'}, {id:2, name: 'sushi'}], rating:{stars: 3.7, count:3}, image:'image'}]
};

function HomePage(props) {
    const cuisines = ['pizza', 'sushi', 'vegan', 'steak', 'asian', 'seafood', 'pasta'];
    return (
        <div className={'home-page container'}>
            <Header/>
            <div className={'content'}>
                <RestaurantHeader count={restaurants.count} title={'Order Food'}/>
                <div className={'cuisines'}>
                    <span className={'title'}>Cuisines:</span>
                    <ul className={'filters'}>
                        { cuisines.map((value, item) =>
                            <li className={'item'} key={item}>{value}</li>
                        )}
                    </ul>
                </div>
                <main className={'restaurants-list'}>
                    {restaurants && restaurants.rows.map((value) =>
                        <Link to={`/restaurants/menu/${value.id}`}>
                            <Restaurant classes={'main-page'} restaurant={value}/>
                        </Link>
                    )}
                </main>
            </div>
        </div>
    )
}


export default HomePage;
