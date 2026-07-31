import MenuCard from "../menu/MenuCard";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../services/api";

import { Link } from "react-router-dom";

function FeaturedMenu() {

    const [featuredItems, setFeaturedItems] = useState([]);
        useEffect(() => {
        axios
            .get(`${API_URL}/menu`)
            .then((response) => {
            // Show the first 4 items as featured
            setFeaturedItems(response.data.slice(0, 4));
            })
            .catch((error) => {
            console.error("Error fetching featured menu:", error);
            });
        }, []);
    return (
       <section id="menu" className="featured-menu">
            <h2>Featured Menu</h2>
            <p>Our customers favorite selection</p> 

            <div className="menu-grid">
              {featuredItems.map((item) => (
                    <MenuCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                    ))}
            </div>
            <div className="view-menu">
                <Link to="/menu" className="view-menu-btn">
                   View Full Menu
                </Link>
            </div>
        </section>
    )

}

export default FeaturedMenu;