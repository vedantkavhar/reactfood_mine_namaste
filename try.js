import React from "react";
import ReactDOM from "react-dom/client";

// food order
// header
//     logo
//     nav items
//     cart
// body
//     search
//     cards restaurant
// footer
//     links media
//     copyright

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="images/foodordering.jpg" alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e"
                alt="restaurant"
            />

            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h5>{resData.info.avgRating}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <h5>{resData.info.sla.deliveryTime} mins</h5>
        </div>
    );
};

const resObj = {
    info: {
        id: "611807",
        name: "Barbeque Nation",
        cloudinaryImageId: "iydxtay1mnne2ktw7txe",
        locality: "Global Highstreet Mall",
        areaName: "Hinjawadi",
        costForTwo: "₹600 for two",
        cuisines: [
            "North Indian",
            "Barbecue",
            "Biryani",
            "Kebabs",
            "Mughlai",
            "Desserts"
        ],
        avgRating: 3.8,
        parentId: "2438",
        avgRatingString: "3.8",
        totalRatingsString: "100+",
        sla: {
            deliveryTime: 44,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY"
        },
        availability: {
            nextCloseTime: "2024-06-26 23:30:00",
            opened: true
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
            entityBadges: {
                imageBased: {},
                textBased: {},
                textExtendedBadges: {}
            }
        },
        aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100"
        },
        differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
                mediaType: "ADS_MEDIA_ENUM_IMAGE",
                lottie: {},
                video: {}
            }
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {}
    },
    analytics: {},
    cta: {
        link: "https://www.swiggy.com/restaurants/barbeque-nation-global-highstreet-mall-hinjawadi-pune-611807",
        type: "WEBLINK"
    }
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-card-container">
                <RestaurantCard resData={resObj} />
                <RestaurantCard resData={resObj} />
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
