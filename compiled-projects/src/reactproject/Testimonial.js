import React, { useEffect, useState } from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CardTesti from "./components/StyledTestimonialCard";
import Button from "./components/Button";
import dogImage from "./imgs/dog.jpg";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
function Testimonial() {
  const [testimonials, setTestimonials] = useState("");

  const [items, setItems] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <section className="bg-gray-100 py-16 flex justify-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-1xl font-bold text-center text-violet-300 ">
          Testimonial
        </h1>
        <h2 className="text-3xl font-semibold text-center mb-8">
          What our Clients Says
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex space-x-4  rounded">
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Users
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Users
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Users
            </button> */}

            <Button
              classNames={
                "flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              }
              text={"Posts"}
              btnClass="btn-info "
              icon={<BsFillFileEarmarkPostFill className="" />}
              onClick={() => setTestimonials("Posts")}
            />
            <Button
              classNames={
                "flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              }
              text={"Users"}
              btnClass="btn-info "
              icon={<FaUserAlt />}
              onClick={() => setTestimonials("Users")}
            />
            <Button
              classNames={
                "flex flex-col bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              }
              text={"Comments"}
              btnClass="btn-info "
              icon={<BiCommentDetail />}
              onClick={() => setTestimonials("Comments")}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 my-2 ">
          {/* cards */}

          {!items
            ? null
            : items.map((item) => {
                return (
                  <div key={item.id} className=" card card-primary m-1">
                    {item.name && <h2 className="card-header">{item.name}</h2>}

                    <div className="card-body">
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>

                    {item.email && (
                      <small className="card-footer">{item.email}</small>
                    )}
                  </div>
                );
              })}

          {/* <CardTesti
            image={dogImage}
            saying={"Lorem Ipsum"}
            name={"Test test"}
          /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </div>
    </section>
  );
}

export default Testimonial;
