import React from 'react';

import store from "../data/items.json";
import Item from "./Item.js";

function Gallery() {
    let itemCards = store.map( (itemObj) => {
        let itemImg = itemObj.img;
        let itemImgAlt = itemObj.imgAlt;

        if (!itemImg || itemImg === "") {
            itemImg = "/media/noImage.jpg";
            itemImgAlt = "No image available for this item.";
        }

        return (<Item key={itemObj.id}
                      id={itemObj.id}
                      name={itemObj.name}
                      price={itemObj.price}
                      img={itemImg}
                      imgAlt={itemImgAlt} />);
    });

    return (
        <main>
        <div className="gallery">
            {itemCards}
        </div>
    </main>
    );
}

export default Gallery;