import React from "react";
import ReactDOM from 'react-dom/client';


/* Header -
            logo
            Navigation items
   Body -
         Search bar
         Restuarant container
         Restuarantcard
            - img
            - Name of res, star rating, cuisine, delivery time
   Footer -
         Copyright
         Address
         links
         contact us
*/

const Header =() =>
{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/021/953/308/non_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"></img>

            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>contact Us</li>
                    <li>Cart</li>         
                </ul>

            </div>


        </div>
    );
};

const RestaurantCard =(props) =>{
    const{resData}=props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src={resData.cloudinaryImageId} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(',')}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.deliveryTime}</h4>

        </div>
    );
};

const resList = [
  {
    id: "1",
    name: "Pizza Palace",
    cuisines: ["Italian", "Fast Food"],
    avgRating: "4.2",
    deliveryTime: "30 mins",
    cloudinaryImageId: "dd",
  },
  /*{
    id: "2",
    name: "Biryani House",
    cuisines: ["Hyderabadi", "Mughlai"],
    avgRating: "4.5",
    deliveryTime: "25 mins",
    cloudinaryImageId: "gibtssvjep7psugwqn4f",
  },
  {
    id: "3",
    name: "Burger Hub",
    cuisines: ["American", "Snacks"],
    avgRating: "4.0",
    deliveryTime: "20 mins",
    cloudinaryImageId: "kqlzptvxylywft4ek4on",
  },
  {
    id: "4",
    name: "South Indian Delight",
    cuisines: ["South Indian"],
    avgRating: "4.3",
    deliveryTime: "22 mins",
    cloudinaryImageId: "fvlhwsd9tvgjv3hmhhxs",
  },
  {
    id: "5",
    name: "Chinese Wok",
    cuisines: ["Chinese", "Asian"],
    avgRating: "3.9",
    deliveryTime: "28 mins",
    cloudinaryImageId: "htbyfpuc6x5ekg2b0xpc",
  },
  {
    id: "6",
    name: "Tandoori Flames",
    cuisines: ["North Indian", "Tandoori"],
    avgRating: "4.1",
    deliveryTime: "27 mins",
    cloudinaryImageId: "h8n7n4k5xzfgmqqtzjyo",
  },
  {
    id: "7",
    name: "Wrap & Roll",
    cuisines: ["Wraps", "Snacks"],
    avgRating: "3.8",
    deliveryTime: "18 mins",
    cloudinaryImageId: "lwpa6w9msxst59il6o1e",
  },
  {
    id: "8",
    name: "Healthy Bowl",
    cuisines: ["Healthy", "Salads"],
    avgRating: "4.4",
    deliveryTime: "24 mins",
    cloudinaryImageId: "ykhyjxvzl4jykpwrz3av",
  },
  {
    id: "9",
    name: "Grill Master",
    cuisines: ["Grill", "Barbecue"],
    avgRating: "4.2",
    deliveryTime: "26 mins",
    cloudinaryImageId: "y3poytn4rxzqvhf3knho",
  },
  {
    id: "10",
    name: "Pasta Paradise",
    cuisines: ["Italian", "Continental"],
    avgRating: "4.0",
    deliveryTime: "23 mins",
    cloudinaryImageId: "qdeakrqcn7n0wdqxdh4o",
  },
  {
    id: "11",
    name: "Taco Time",
    cuisines: ["Mexican"],
    avgRating: "4.1",
    deliveryTime: "21 mins",
    cloudinaryImageId: "qpqdm8s1lh3fo8t5j2lh",
  },
  {
    id: "12",
    name: "The Waffle Bar",
    cuisines: ["Desserts", "Bakery"],
    avgRating: "4.6",
    deliveryTime: "19 mins",
    cloudinaryImageId: "n4hwzsjtewdr7ujlcpqg",
  }
 */
  

];





const Body =() =>
{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[0]} />

                
                
            </div>

        </div>
    );
};

const AppLayout =() =>
{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

