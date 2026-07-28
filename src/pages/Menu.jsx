import MenuCard from "../components/menu/MenuCard"

import cappuccino from "../assets/images/cappuccino.avif"
import croissant from "../assets/images/croissant.avif"
import chocolatecake from "../assets/images/chocolatecake.avif"
import sandwich from "../assets/images/sandwich.avif"
import tea from "../assets/images/tea.avif";

import "../styles/menu.css";


function Menu () {
    return(
        <section className="menu-page">
          <div className="menu-header">
            <h1>Menu</h1>
            <p>Browse and manage café menu items</p>
          </div>

          <div className="menu-filter">
            <div className="menu-search">
            
                <input
                 type="text" 
                 placeholder="Search menu items..." 
                />
            </div>
         

          <div className="menu-categories">
            <button>Coffee</button>
            <button>Tea</button>
            <button>Pastry</button>
            <button>Desserts</button>
            <button>Food</button>
          </div>
           </div>

          <div className="menu-grid">
             <MenuCard 
               image={cappuccino}
               name="Cappuccino"
               description="Rich and creamy coffee with steamed milk"
               price="300"
             />

             <MenuCard 
               image={croissant}
               name="Croissant"
               description="Fresh buttery croissant."
               price="400"
             />

             <MenuCard 
               image={chocolatecake}
               name="Chocolate Cake"
               description="Moist chocolate cake with creamy frosting."
               price="600"
             />

             <MenuCard 
               image={sandwich}
               name="Sandwich"
               description="Fresh sandwich served with salad."
               price="800"
             />

             <MenuCard
                image={tea}
                name="Kenyan Tea"
                description="Traditional Kenyan tea with milk and spices."
                price="250"
            
                />
            </div>
        </section>
    );
}

export default  Menu;