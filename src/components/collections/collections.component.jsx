import React from "react";
import './collections.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const Collections = ({ title, items }) => {

    return (
        <div className="collections">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                        <CollectionItem className="shop-item" key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default Collections;