import React, { useEffect, useState } from "react";

function ProductDetails({ productId }) {
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    // Récupérez les détails du produit en fonction de l'ID du produit
    // Exemple : appel API
    fetch(`/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data));
  }, [productId]);

  if (!productDetails) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{productDetails.name}</h2>
      {/* Afficher les détails du produit ici */}
      <p>{productDetails.description}</p>
      <img src={productDetails.image} alt={productDetails.name} />
      {/* ... */}
    </div>
  );
}

export default ProductDetails;
