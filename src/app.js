import "./setup";

const { conf } = nx.$global;

class App {
  async start() {
    console.log('hello babel-node! 👉', nx.VERSION);
    console.log(conf.gets());
  }
}


(async () => {
  const app = new App();
  await app.start();
})();

