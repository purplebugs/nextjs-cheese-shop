import { Suspense } from "react";
import Loading from "@/app/loading.js";
import { cheese } from "@/lib/data.js";
import { DeleteButton } from "@/components/DeleteButton.js";

async function getData(id) {
  const res = cheese.find((c) => c.id === id);
  return res;
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
