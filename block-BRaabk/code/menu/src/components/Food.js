function Food(props) {
  console.log(props.everyFood);
  return (
    // <div className="">
      <div className="flex justify-content align-items wrap">
        {props.everyFood.map((food) => {
          return (
            <div className="card">
              <img
                src={food.img}
                alt="FoodImage"
                width="100%"
                height="300px"
              ></img>
              <p>{food.title}</p>
              <h5>{food.category}</h5>
              <p>{food.price}</p>
              <p>{food.desc}</p>
            </div>
          );
        })}
      </div>
    // </div>
  );
}

export default Food;