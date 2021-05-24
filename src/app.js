import "@/setup";

const { conf, args } = nx.$global;

class App {
  async start() {
    console.log('hello babel-node! 👉', nx.VERSION);
    console.log(conf.gets(), args);
  }
}


(async () => {
  const app = new App();
  await app.start();
})();

