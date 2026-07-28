import "../../styles/MenuCard.css";


function MenuCard({ image, name, description, price}) {
    return (
        <div className="menu-card">
            <img src={image} alt={name} className="menu-image" />
            <div className="menu-content">
                <h3>{name}</h3>
                <p>{description}</p>

                <div className="menu-footer">
                    <span className="price">Ksh{price}</span>
                    <button className="cart-btn">Add to Cart</button>
                </div>
            </div>
           
        </div>
    )
}

export default MenuCard