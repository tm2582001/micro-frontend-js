import faker from "faker";

// Context/Situation #1
// We are running this file in development in isolation
// we are using our local index.html which definitely has an element with an id of 'dev-products'
// we want to immediately render our app into that element

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
//   ReactDOM.render(<App/>, el);
};
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-products");

    // assuming our container doesn't have an element with id "dev-products"
    if(el){
        mount(el);
    }

}

// Context/Situation 2
// We are running this file in development or production
// through the container app
// No guarantee that an element with an id of "dev-products"
// We do not want try to immediately render the app

export {mount};
