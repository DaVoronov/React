import Product from "./Product";

const productsData = [
  {
    name: "Tacos",
    price: 9.99,
    imgUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    available: true,
  },

  {
    name: "Burger",
    price: 12.6,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLsDXlKi6UTnMy8sZNZQXySI4cd_EE5S99A&usqp=CAU",
    available: false,
  },

  {
    name: "Pizza",
    price: 6.99,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l2d_jlbEtZK0n_Vk9sPpKcVtWIFjw3fUMg&usqp=CAU",
    available: true,
  },

  {
    name: "Pizza copy",
    price: 7.99,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_l2d_jlbEtZK0n_Vk9sPpKcVtWIFjw3fUMg&usqp=CAU",
    available: true,
  },
];

function App() {
  return (
    <div>
      {productsData.map((product, index) => (
        <Product
          key={product.name}
          name={product.name}
          price={product.price}
          imgUrl={product.imgUrl}
          available={product.available}
        />
      ))}
    </div>
  );
}

export default App;
