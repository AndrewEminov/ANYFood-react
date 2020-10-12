import React, {useEffect} from 'react';
import Restaurant from "./Restaurant";
function RestaurantHeader({title, count, currentRestaurant}) {

    // useEffect(() => {
    //
    // },[]);

    return (
        <div className={'restaurant-header'}>
            <h1 className={'title'}>{currentRestaurant?.title || title}</h1>
            {currentRestaurant ? <Restaurant/> : <p className={'description'}>From {count} Restaurants</p>}
        </div>
    )
}


export default RestaurantHeader;
