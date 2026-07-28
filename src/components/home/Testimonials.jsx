import { FaStar, FaRegStar } from "react-icons/fa";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "sarah hassan",
            rating: 5,
            review: "The coffee here is amazing! I love the cozy atmosphere and friendly staff."
        },
        {
            id: 2,
            name: "Jane Smith",
            rating: 4,
            review: "I had the best croissant of my life here. Highly recommend!"
        },
        {
            id: 3,
            name: "Mike Johnson",
            rating: 5,
            review: "The chocolate cake is to die for! I can't wait to come back and try more items from the menu."
        }
    ];

    return (
        <section className="testimonials">
            <h2>What Our Customers Say</h2>
            <p>Real experiences from our happy customers</p>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-card">
                      <div className="stars">
                            {[...Array(5)].map((_, index) =>
                                index < testimonial.rating ? (
                                <FaStar key={index} />
                                ) : (
                                <FaRegStar key={index} />
                                )
                            )}
                            </div>
                        <p>{testimonial.review}</p>
                       <h4>{testimonial.name}</h4>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default Testimonials;