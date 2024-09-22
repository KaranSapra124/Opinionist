import React, { useEffect, useState } from "react";
import { Badge, Card } from "antd";
import axios from "axios";
const Offers = () => {
  const [recipes, setRecipes] = useState([]);
  const divStyle = {
    background: `url("OffersBanner.jpg")`,
    backgroundSize: "cover",
  };
  let star = "⭐";
  useEffect(() => {
    const fetchRecipes = async (url) => {
      const data = await axios.get(url);
      setRecipes(data?.data.recipes);
    };
    fetchRecipes("https://dummyjson.com/recipes");
  }, []);
  return (
    <>
      <div style={divStyle}>
        <div className="pt-2 pb-2">
          <h1 className="bg-green-500 rounded-xl p-2 font-bold text-center text-[2rem] max-[500px]:text-[1.5rem] text-white  w-fit m-auto shadow-lg ">
            Today's Offers!
          </h1>
        </div>
        <div className="flex justify-evenly m-2 flex-wrap">
          {recipes?.splice(0, 2)?.map((elem, index) => {
            return (
              <Card
                key={index}
                className="w-[35rem] shadow-lg cursor-pointer mb-2"
              >
                <div className="flex justify-center items-center max-[700px]:flex-wrap">
                  <img className="w-52" src={elem.image} alt="" />
                  <div className="m-2">
                    <h1 className="mt-2 text-[1.5rem] font-semibold text-center">
                      {elem.name}
                    </h1>
                    <div className="flex justify-center items-center">
                      {elem.tags.map((tag) => (
                        <Badge className="bg-green-500 m-1  text-white rounded p-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-center font-semibold text-xl">
                        Ingredients
                      </h3>
                      <div className="text-center">
                        {elem.ingredients.splice(0, 3).map((elem) => (
                          <li className="text-blue-400 font-semibold">
                            {elem}
                          </li>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div>{star.repeat(Math.round(elem.rating))}</div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="flex justify-evenly m-2 flex-wrap">
          {recipes?.slice(1, 3)?.map((elem, index) => {
            return (
              <Card
                key={index}
                className="w-[35rem] shadow-lg cursor-pointer mb-2"
              >
                <div className="flex justify-center items-center max-[700px]:flex-wrap">
                  <img className="w-52" src={elem.image} alt="" />
                  <div className="m-2">
                    <h1 className="mt-2 text-[1.5rem] font-semibold text-center">
                      {elem.name}
                    </h1>
                    <div className="flex justify-center items-center flex-wrap">
                      {elem.tags.map((tag) => (
                        <Badge className="bg-green-500 m-1  text-white rounded p-2">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h3 className="text-center font-semibold text-xl">
                        Ingredients
                      </h3>
                      <div className="text-center">
                        {elem.ingredients.splice(0, 3).map((elem) => (
                          <li className="text-blue-400 font-semibold">
                            {elem}
                          </li>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div>{star.repeat(Math.round(elem.rating))}</div>
                    </div>{" "}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offers;
