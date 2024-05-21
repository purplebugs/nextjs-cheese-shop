import CheeseList from "@/components/CheeseList.js";
import { cheese } from "@/lib/data.js";

async function getData() {
  // Use of fetch would be for getting data from an external API
  // Just returning cheese because it's a local data source
  return cheese;
}

export default async function Home() {
  const data = await getData();

  if (!data) return null;

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
