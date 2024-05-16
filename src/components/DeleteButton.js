"use client";

async function deleteCheese(id) {
  const res = await fetch(`/api/cheese/${id}`, { method: "DELETE" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  alert(`
  Message from API: ${result?.message}.

  Open dev tools in browser to see DELETE request`);
}

export function DeleteButton(props) {
  const { id, name } = props;
  return (
    <button
      onClick={(e) => {
        deleteCheese(id);
      }}
      type="submit"
      className="uppercase px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
      Delete the cheese: {name}
    </button>
  );
}
