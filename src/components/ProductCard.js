function ProductCard(props) {
  return (
    <div className="card mt-3" style={{ height: "350px" }}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <p className="card-text text-truncate" title={props.name}>
          {props.name}
        </p>
        <h5 className="card-title">
          {props.price.toLocaleString(navigator.language, {
            style: "currency",
            currency: "BRL",
          })}
        </h5>

        {/* {props.freeShipping ? (
          <span className="badge rounded-pill bg-success">Frete grátis</span>
        ) : null} */}

        {/* Short-circuit evaluation: só exibe o span se freeShipping for verdadeiro */}
        {props.freeShipping && (
          <span className="badge rounded-pill bg-success">Frete grátis</span>
        )}

        <p>
          {/* Soma a nota dos reviews e depois divide pelo tamanho da array para obter a média */}
          {(
            props.reviews.reduce((acc, currentElement) => {
              return acc + currentElement.rating;
            }, 0) / props.reviews.length
          ).toFixed(1)}
          /5
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
