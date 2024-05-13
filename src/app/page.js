import CheeseList from "@/components/CheeseList.js";

async function getData() {
  const res = await fetch("http://localhost:3000/api/cheese");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  if (!data) return null;
  console.log(data);
  return (
    <article>
      <div className="divide-y divide-gray-300/50">
        <CheeseList data={data} />
        <div className="pt-8 text-base font-semibold leading-7">
          <p className="text-gray-900">Want some cheese tips?</p>
          <p>
            <a
              href="https://www.cheese.com"
              rel="noreferrer"
              className="text-sky-500 hover:text-sky-600"
              target="_blank">
              Visit the cheesiest site ever &rarr;
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}
