import React from 'react';
import Categories from './Categories';

let productCategories = [
    {
        id: 1,
        title: 'Posters',
        image: 'img/posters.jpg'
    },
    {
        id: 2,
        title: 'Apparel',
        image: 'img/apparel.jpg'
    },
    {
        id: 3,
        title: 'Stickers',
        image: 'img/stickers.jpg'
    },
    {
        id: 4,
        title: 'Cups',
        image: 'img/cups.jpg'
    },
    {
        id: 5,
        title: 'Calendars',
        image: 'img/calendars.jpg'
    },
]

function Task2() {
    return (
        <div>
            <h3>Task 2</h3>
            <Categories productCategories={productCategories} />
        </div>
    );
}

export default Task2;

/* TASK 2
Atkurkite šį komponentą: https://prnt.sc/1296ht1

Paveikslėliai:
- posters: https://per4mmedia.com/wp-content/uploads/2021/03/posters.jpg
- apparel" https://per4mmedia.com/wp-content/uploads/2021/03/apparel.jpg
- stickers: https://per4mmedia.com/wp-content/uploads/2021/03/stickers.jpg
- cups: https://per4mmedia.com/wp-content/uploads/2021/03/cups.jpg
- calendars" https://per4mmedia.com/wp-content/uploads/2021/03/calendars.jpg

Pastaba: paveikslėlius talpinti projekto aplanke.
*/
