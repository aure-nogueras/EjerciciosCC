const { Etcd3 } = require('etcd3');
const client = new Etcd3();

(async () => {
  
  const valor = await client.get('valor').string();
  console.log('El valor recuperado es:', valor);

  await client.delete().all();
})();
