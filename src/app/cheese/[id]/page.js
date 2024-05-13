import { Suspense } from "react";
import Loading from "@/app/loading.js";
import { DeleteButton } from "@/components/DeleteButton.js";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/cheese/${id}`);

  if (!res?.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CheesePage(context) {
  const { id } = context.params;
  const data = await getData(id);
  if (!data) return null;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div>
          {data?.name} - Colour: {data?.colour} - Price: {data?.price}
        </div>
        <br></br>
        <DeleteButton id={id} name={data?.name} />
      </Suspense>
    </>
  );
}
