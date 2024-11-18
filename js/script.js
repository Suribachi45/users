fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usuarios => {
    const listaUsuarios = document.getElementById('listaUsuarios');

    usuarios.forEach(({ id, name, email, phone, company: { name: companyName } }) => {
      const listaItem = document.createElement('li');
      const img = document.createElement('img');
      img.src = `./assets/img/${id}.jpeg`;
      const details = document.createElement('div');

      // detalles de los usuarios
      const nombre = document.createElement('p');
      nombre.textContent = `Nombre: ${name}`;
      const correo = document.createElement('p');
      correo.textContent = `Email: ${email}`;
      const telefono = document.createElement('p');
      telefono.textContent = `Teléfono: ${phone}`;
      const compa = document.createElement('p');
      compa.texcontent = `compa:${companyName}`;
      
      //edad
      const edad = document.createElement('p');
      edad.textContent = `Edad: ${getRandomInt(20, 60)}`;

      
      details.appendChild(nombre);
      details.appendChild(correo);
      details.appendChild(telefono);
      details.appendChild(edad);
      details.appendChild(compa);

      listaItem.appendChild(img);
      listaItem.appendChild(details);
      listaUsuarios.appendChild(listaItem);
    });
  })
  .catch(error => {
    console.error('Error al obtener los usuarios:', error);
  });

// Función para los numeros aleatorios
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}