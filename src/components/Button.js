// O argumento props é um objeto que vai conter todas as propriedades passadas como atributos HTML para o componente onde esse componente está sendo usado

// 2 tipos de props: children e customizadas

function Button(props) {
  console.log(props);

  return (
    <button
      type="button"
      className={`btn btn-${props.variant} ${
        props.size ? `btn-${props.size}` : ""
      }`}
    >
      {props.children}
    </button>
  );
}

export default Button;
