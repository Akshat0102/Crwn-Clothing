import React from "react";
import { default as shopdata } from '../../components/util/shop-data.json';
import Collections from "../../components/collections/collections.component";

let itemArr = shopdata.shopData;

// class ShopPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             items: shopdata
//         }
//     };

//     render() {
//         const { items } = this.state;
//         return (
//             <div className="shop">{
//                 items.map(({ id, ...otherCollectionProps }) => (
//                     <Collections key={id} {...otherCollectionProps} />
//                 ))
//             }</div>
//         )
//     }
// }

const ShopPage = () => {
    return (
        <div className="shop">
            {
                itemArr.map(({ id, ...otherCollectionProps }) => (
                    <Collections key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}
export default ShopPage;