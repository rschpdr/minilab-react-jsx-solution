function EmotionMeter() {
  const emotion = "HAPPY";

  // Operador ternário
  return emotion === "HAPPY" ? (
    <i className="fas fa-smile fa-5x"></i>
  ) : (
    <i className="fas fa-frown fa-5x"></i>
  );

  // if/else
  // if (emotion === "HAPPY") {
  //   return <i className="fas fa-smile fa-5x"></i>;
  // } else {
  //   return <i className="fas fa-frown fa-5x"></i>;
  // }
}

export default EmotionMeter;
