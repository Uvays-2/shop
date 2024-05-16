const products = document.querySelector(".products");
const request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products");
request.send();

request.addEventListener("load", () => {
  const data = JSON.parse(request.responseText);
  console.log(data);
  data.forEach((c) => {
    products.innerHTML += `
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:translate-y-[-10px] transition hover:shadow-2xl bg-wite">
    <a class="block relative h-48 rounded overflow-hidden">
      <img
        alt="ecommerce"
        class=" h-[200px] w-[200px] "
        src="${c.image}"
      />
    </a>
    <div class="mt-4">
      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
        ${c.category}
      </h3>
      <h2 class="text-gray-900 title-font text-lg font-medium">
        The Catalyzer
      </h2>
      <p class="mt-1">${c.price}</p> <button onclick="alert('add')">Add</button>
    </div>
  </div>
        `;
  });
});
