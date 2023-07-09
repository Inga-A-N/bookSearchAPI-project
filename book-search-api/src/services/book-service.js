export const getBooksBySearchTerm = async (searchTerm = "") => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm
      .split(" ")
      .join("+")}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  console.log(data);
  if (data.totalItems === 0) {
    throw new Error("No books found");
  }
  console.log(data.items);
  return data.items;
};
