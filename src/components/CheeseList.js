"use client";
import CheeseItem from "@/components/CheeseItem";
import { useState } from "react";

export default function CheeseList({ data }) {
  const [totalPrice, setTotalPrice] = useState(0);

  function onSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // const entries = Array.from(formData.entries());
    const cheeseValues = Array.from(formData.values());

    calculateTotalPrice(cheeseValues);
  }

  function calculateTotalPrice(values) {
    let total = 0;
    values.forEach((price) => {
      total = total + parseInt(price);
    });
    setTotalPrice(total);
  }

  return (
    <>
      <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
        <h2>Enjoy our cheese selection:</h2>
        <form
          className="space-y-4"
          name="cheeseSelector"
          onSubmit={(e) => {
            onSubmit(e);
          }}>
          {data?.map((cheese) => (
            <CheeseItem key={cheese?.id} cheese={cheese} />
          ))}

          <button
            type="submit"
            className="uppercase px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Calculate Total Price
          </button>
          <h3>Total price: {totalPrice}</h3>
        </form>
      </div>
    </>
  );
}
