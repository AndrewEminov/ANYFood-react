import React from 'react';
import Box from "@material-ui/core/Box";
import Rating from '@material-ui/lab/Rating';

function Restaurant({classes, restaurant}) {

    return (
        <div key={restaurant.id} className={`food ${classes}`}>
            <h3 className={'title'}>{restaurant.title}</h3>
            <ul className={'menu'}>
                {restaurant.menuList && restaurant.menuList.map((item)  =>
                    <li className={'item'} key={item.id}>{item.name},</li>
                )}
            </ul>
            <Box className={'rating'} component="fieldset" mb={3} borderColor="transparent">
                <Rating className={'stars'} name="read-only" value={restaurant.rating.stars} readOnly />
                <p className={'counting'}>({restaurant.rating.count})</p>
            </Box>
        </div>
    )
}


export default Restaurant;
