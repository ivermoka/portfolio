import { useEffect, useState } from "react";

function About() {
  const [joke, setJoke] = useState();

  async function fetchJoke() {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error("Failed to fetch Chuck Norris joke");
    }

    const data = await response.json();
    setJoke(data);
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <section className="my-20 w-full h-full flex text-white">
      <div className="w-[60%] p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl">Hey there!</h1>
          <p>
            My name is Iver. I'm 17 years old and was born in Oslo, Norway. I
            like to program, play games and watch shows and movies.
          </p>
        </div>

        <div className=" pt-10 ">
          <p>Random Chuck Norris joke:</p>
          {joke ? joke.value : "no joke:("}
        </div>
      </div>
      <div
        className="w-[40%]  bg-contain bg-no-repeat bg-gradient-to-t"
        style={{ backgroundImage: `url("iver.jpg")` }}
      ></div>
    </section>
  );
}

export default About;
