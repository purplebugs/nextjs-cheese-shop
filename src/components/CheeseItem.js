import Link from "next/link";
import Image from "next/image";
import adelost from "@/public/cheese/adelost.jpg";
import danbo from "@/public/cheese/danbo.jpg";
import la_peral from "@/public/cheese/la_peral.jpg";

// Workaround to staticly load images because dynamic import is not supported in next.js
// Scaling and handling of images from a data source requires other functionality that what next.js provides
// Ref: https://nextjs.org/docs/app/building-your-application/optimizing/images

// Note: Could have used https://nextjs.org/docs/app/building-your-application/optimizing/images#fill-container
// however this is not good for the amount of data needing to be loaded for the user in a production setting

const images = [adelost, danbo, la_peral];

export default function CheeseItem({ cheese }) {
  return (
    <fieldset key={cheese?.id} className="flex items-center">
      <input
        type="checkbox"
        className="accent-purple-500 h-8 w-8 "
        id={cheese?.id}
        name="cheeseList"
        value={cheese?.price}></input>

      <Image
        src={images[`${parseInt(cheese?.id) - 1}`]} // Id of cheese is one higher than cheese array position
        alt={`Image of cheese: ${cheese?.name}`}
        className="relative ml-4 rounded-lg"
        style={{
          width: "50%",
          height: "10rem",
        }}
      />

      <label htmlFor={cheese?.id} className=" ml-4">
        <Link
          className="font-medium underline text-purple-500 hover:text-pink-500"
          href="/cheese/[id]"
          as={`/cheese/${cheese?.id}`}>
          <p className="font-light text-xl pt-4">{cheese?.name ?? `Cheese ${cheese?.id}`}</p>
        </Link>
        <p className="font-light text-lg pt-4">{`$${cheese?.price}`}</p>
      </label>
    </fieldset>
  );
}
