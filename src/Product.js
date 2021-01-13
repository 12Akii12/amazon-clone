import React, { useEffect } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import AOS from "aos";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	// console.log("BASKET:   ", basket);
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	useEffect(() => {
		AOS.init({
			duration: 800,
		});
	}, []);

	return (
		<div className="product" data-aos="zoom-in">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>

			<img data-aos="flip-left" src={image} alt="" />

			<button onClick={addToBasket}>Add To Basket</button>
		</div>
	);
}

export default Product;