import Image from "next/image";
import React from "react";

const OurStoryPage = () => {
  return (
    <div>
      <h1
        style={{ fontFamily: "cursive" }}
        className="font-bold md:text-4xl text-2xl mt-20 md:mb-10 text-center"
      >
        - Our Story -
      </h1>
      <div className="grid md:grid-cols-3 justify-between items-center gap-10 md:mx-20 mx-5">
        <div>
          <p className="md:text-2xl text-xl font-bold text-center my-5">
            Nabila
          </p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          nemo corrupti, consequuntur explicabo officiis voluptatum fugit quas
          possimus deserunt aspernatur voluptates cumque repellat aliquam!
          Asperiores dolorum assumenda ad nihil praesentium!
        </div>
        <div>
          <Image
            src="/silhouette-young-couple-field_1301-5841.jpg"
            alt=""
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
        <div>
          <p className="md:text-2xl text-xl font-bold text-center my-5">
            Nazmul
          </p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          aspernatur quod asperiores impedit! Consequuntur, perferendis aut. Quo
          at, mollitia architecto enim reprehenderit fugit, aperiam numquam, sed
          quaerat veniam fugiat sunt.
        </div>
      </div>
    </div>
  );
};

export default OurStoryPage;
