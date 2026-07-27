import MenuCard from "../menu/MenuCard";

import cappuccino from "../../assets/images/cappuccino.avif";
import croissant from "../../assets/images/croissant.avif";
import chocolatecake from "../../assets/images/chocolatecake.avif";
import sandwich from "../../assets/images/sandwich.avif";
import { Link } from "react-router-dom";

function FeaturedMenu() {
    return (
       <section className="featured-menu">
            <h2>Featured Menu</h2>
            <p>Our customers favorite selection</p> 

            <div className="menu-grid">
                <MenuCard 
                image={cappuccino}
                 name="Cappuccino" 
                 description="Rich and creamy coffee with steamed milk" 
                 price="300" />
                <MenuCard 
                image={croissant} 
                name="Croissant" 
                description="Buttery and flaky pastry filled with chocolate"
                 price="400" />
                <MenuCard 
                image={chocolatecake} 
                name="Chocolate Cake" 
                description="Rich and indulgent chocolate cake" 
                price="600" />
                <MenuCard 
                image={sandwich} 
                name="Sandwich" 
                description="Freshly made sandwich with your choice of fillings" 
                price="800" />
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