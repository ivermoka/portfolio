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
    <section className="my-20 mt-[15vh] h-[70vh] flex items-center  flex-row lg:flex-row sm:flex-col text-white">
      <div className="w-[60%] p-5 flex flex-col justify-between">
        <div>
          <h1 className="text-6xl lg:text-3xl">Hey there!</h1>
          <p className=" text-3xl lg:text-xl">
            My name is Iver. I'm 17 years old and was born in Oslo, Norway. I
            like to program, play games and watch shows and movies. Right now,
            my favorite movies are "28 days later", "Hereditary" and "The Fly".
          </p>
        </div>

        <div className="text-3xl lg:text-xl pt-10 ">
          <p>Random Chuck Norris joke:</p>
          {joke ? joke.value : "no joke:("}
        </div>
      </div>

      <div
        className="bg-contain bg-no-repeat flex h-[30vh] w-1/2 lg:h-[60vh]"
        style={{ backgroundImage: `url("iver.jpg")` }}
      ></div>
    </section>
  );
}

export default About;
