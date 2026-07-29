import { useState } from "react"

import MenuCard from "../components/menu/MenuCard"

import cappuccino from "../assets/images/cappuccino.avif"
import croissant from "../assets/images/croissant.avif"
import chocolatecake from "../assets/images/chocolatecake.avif"
import sandwich from "../assets/images/sandwich.avif"
import tea from "../assets/images/tea.avif";

import "../styles/menu.css";

function Menu() {
const  menuItems = [
      {
    image: cappuccino,
    name: "Cappuccino",
    description: "Rich and creamy coffee with steamed milk",
    price: 300,
    category: "Coffee",
    
  },
  {
    image: croissant,
    name: "Croissant",
    description: "Fresh buttery croissant",
    price: 400,
    category: "Pastry",

  },
   {
    image: chocolatecake,
    name: "Chocolate Cake",
    description: "Moist chocolate cake with creamy frosting",
    price: 600,
    category: "Desserts",
    
  },
  {
    image: sandwich,
    name: "Sandwich",
    description: "Fresh sandwich served with salad",
    price: 800,
    category: "Food",

  },
  {
    image:tea,
    name: " Kenyan Tea",
    description: "Traditional Kenyan tea with milk and spices.",
    price: 250,
    category: "Tea"
  }
]

const [search, setSearch] = useState("");


const [category, setCategory] = useState("All");


const filteredItems = menuItems.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "All" || item.category === category;

  return matchesSearch && matchesCategory;
});


 return (
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
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                />
            </div>
         

          <div className="menu-categories">
            <button 
             className={category === "ALL" ? "active" : ""}
             onClick={() => setCategory("ALL")}>
            All</button>
            <button
              className={category === "Coffee" ? "active" : ""}
              onClick={() => setCategory("Coffee")}
            >Coffee</button>
            <button
                className={category === "Tea" ? "active" : ""}
                onClick={() => setCategory("Tea")}
            >Tea</button>
            <button
                   className={category === "Pastry" ? "active" : ""}
                   onClick={() => setCategory("Pastry")}

            >Pastry</button>
            <button
             className={category === "Desserts" ? "active" : ""}
             onClick={() => setCategory("Desserts")}
            >Desserts</button>
            <button
                  className={category === "Food" ? "active" : ""}
                  onClick={() => setCategory("Food")}

            >Food</button>
          </div>
           </div>

          <div className="menu-grid">
           {filteredItems.map((item) => (
              <MenuCard
                key = {item.name}
                image = {item.image}
                name = {item.name}
                descrption = {item.description}
                price = {item.price}
               />
          ) )}

       </div>
 </section>
 );

}
export default  Menu;