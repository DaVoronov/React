import styles from "./Product.module.css";

function Product({ imgUrl, name, price, available }) {
  return (
    <div>
      <img src={imgUrl} width="250px" />
      <h3 className={available ? styles.nameAvailable : styles.nameUnAvailabel}>
        {name}
      </h3>
      <p className={styles.price}>Price: {price}$</p>
      {available ? <button>Купити</button> : <p>Товар не доступний</p>}
    </div>
  );
}

export default Product;
