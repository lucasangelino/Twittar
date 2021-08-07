const data = {
  timeline: [
    {
      id: 0,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message:
        "Hoy conquiste otro sistema solar, como lo debo llamar? Que dicen? Abro encuenta",
    },
    {
      id: 1,
      avatar:
        "http://pm1.narvii.com/6726/b18d390ce2ddf3a897c311921926715d7245f4d5v2_00.jpg",
      username: "Luke Skywalker",
      message:
        "El otro dia le pedi a Obi Wan que me prestara la nave para salir un rato. Me dijo que no. Tuve que ir caminando a la joda",
    },
    {
      id: 2,
      avatar:
        "https://images.clarin.com/2019/10/23/los-ros-rodetes-laterales-de___rBsOy-7E_720x0__1.jpg",
      username: "Leia",
      message: "Me abro otro Instagram? Si llego a los 100.000 RT lo hago",
    },
    {
      id: 3,
      avatar:
        "https://static.vix.com/es/sites/default/files/styles/1x1/public/m/maestro_yoda_star_wars_portada.jpg",
      username: "Yoda",
      message: "El esribitr mucho en las redes sociales al mal camino lleva.",
    },
    {
      id: 4,
      avatar: "https://i.ebayimg.com/images/g/eAcAAOSwfZ1Wbhyh/s-l300.jpg",
      username: "Chubaca",
      message: "GRRRRRRRR , GRRRRR, GGR, RRRGRRRRRRRRRG GGGGR -gRRRRRR",
    },
    {
      id: 5,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message: "Yo soy tu Padre",
    },
    {
      id: 6,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message:
        "Otro dia les cuento la tragedia de Darth Pleguis el Sabio. ahora ni da...",
    },
    {
      id: 7,
      avatar:
        "http://pm1.narvii.com/6726/b18d390ce2ddf3a897c311921926715d7245f4d5v2_00.jpg",
      username: "Anakin Skywalker",
      message:
        "La carrera de pilotos comienza la semana que viene, los que se quieran inscribir, escribirme por privado",
    },
    {
      id: 8,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message: "Bueno, voy a subir los impuestos de la Republica",
    },
    {
      id: 9,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message: "Conocen la tragedia de Darth Pleguis el Sabio?",
    },
    {
      id: 10,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message: "Cuando respiro se me empaña la mascara. Algun consejo?",
    },
    {
      id: 11,
      avatar:
        "https://static.vix.com/es/sites/default/files/styles/1x1/public/m/maestro_yoda_star_wars_portada.jpg",
      username: "Yoda",
      message:
        "O sientes al ver llegar a tu novia lo mismo que cuando tu maleta aparece en la cinta de equipajes del aeropuerto, o estás mejor soltero.",
    },
  ],
};

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(data));
};
