import "bootstrap/dist/css/bootstrap.min.css";

// Props = Properties
import Container from "./Container";
import Button from "./Button";
import ProductCard from "./ProductCard";

const fakeDb = [
  {
    img: "https://i.zst.com.br/thumbs/45/2f/32/868244726.jpg",
    name: "Lavadora Brastemp 12kg BWK12AB",
    price: 1789.0,
    freeShipping: false,
    reviews: [
      { date: "2022-03-04", rating: 4, comment: "", userId: 1 },
      {
        date: "2022-03-03",
        rating: 1,
        comment: "muito ruim",
        userId: 2,
      },
      {
        date: "2022-03-02",
        rating: 5,
        comment: "muito boa",
        userId: 3,
      },
      {
        date: "2022-03-01",
        rating: 3,
        comment: "ok",
        userId: 4,
      },
    ],
  },
  {
    img: "https://i.zst.com.br/thumbs/45/37/3b/931539906.jpg",
    name: "Ar-Condicionado Split LG 9000 BTUs Frio S4-Q09WA51",
    price: 1649.0,
    freeShipping: true,
    reviews: [
      { date: "2022-03-04", rating: 4, comment: "", userId: 1 },
      {
        date: "2022-03-03",
        rating: 1,
        comment: "muito ruim",
        userId: 2,
      },
    ],
  },
  {
    img: "https://i.zst.com.br/thumbs/45/37/3b/931539906.jpg",
    name: "Ar-Condicionado Split LG 9000 BTUs Frio S4-Q09WA51",
    price: 1649.0,
    freeShipping: true,
    reviews: [
      { date: "2022-03-04", rating: 4, comment: "", userId: 1 },
      {
        date: "2022-03-03",
        rating: 1,
        comment: "muito ruim",
        userId: 2,
      },
      {
        date: "2022-03-01",
        rating: 3,
        comment: "ok",
        userId: 4,
      },
    ],
  },
  {
    img: "https://i.zst.com.br/thumbs/45/37/3b/931539906.jpg",
    name: "Ar-Condicionado Split LG 9000 BTUs Frio S4-Q09WA51",
    price: 1649.0,
    freeShipping: true,
    reviews: [
      { date: "2022-03-04", rating: 4, comment: "", userId: 1 },
      {
        date: "2022-03-03",
        rating: 1,
        comment: "muito ruim",
        userId: 2,
      },
      {
        date: "2022-03-01",
        rating: 3,
        comment: "ok",
        userId: 4,
      },
    ],
  },
];

function App() {
  return (
    <Container>
      {/* O que fica à esquerda do "=" será o nome da chave no objeto props que ficará disponível dentro do componente, e o que fica à direita do "=" será o valor dessa chave. */}
      {/* Tudo que é passado como filho do componente (entre suas tags) fica disponível na prop 'children' automaticamente */}
      <Button variant="primary" size="lg">
        <strong>Clique aqui</strong>
      </Button>
      <Button variant="dark">Cadastro</Button>

      <div className="row mt-5">
        {fakeDb.map((currentProductObj) => {
          return (
            <div className="col-4">
              <ProductCard
                img={currentProductObj.img}
                name={currentProductObj.name}
                price={currentProductObj.price}
                freeShipping={currentProductObj.freeShipping}
                reviews={currentProductObj.reviews}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default App;
