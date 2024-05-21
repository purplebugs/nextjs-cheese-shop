import { client } from "@/utils/sanity/client";

// Fetch content with GROQ
async function getContent() {
  const CONTENT_QUERY = `*[_type == "pattern"] {
  ...,
  content[] {
    _type,
    ...,
    defined(string) => string
  },
  file {
    ...
  },
  tags[],
  category->
}
`;
  const content = await client.fetch(CONTENT_QUERY);
  return content;
}

// Log content to console
getContent().then((content) => console.log(content));

export default async function SanityTrial() {
  const data = await getContent();
  return (
    <div>
      <h1 className="py-9">Sanity Trial</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id} className="pb-8">
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            {/*             <img src={item?.file?.asset?.url} alt={item?.title} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
