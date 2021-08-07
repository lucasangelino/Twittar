const data = {
  timeline: [
    {
      id: 0,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message:
        "- Mira cariño, ya he montado la cama de IKEA sin mirar las instrucciones. - Era un armario. - Vaya.",
    },
    {
      id: 1,
      avatar: "https://randomuser.me/api/portraits/med/men/2.jpg",
      username: "Luke Skywalker",
      message:
        "La próxima vez que me empiece una relación sólo escucharé Camela. Estoy harto de acabar relaciones y odiar mis canciones favoritas.",
    },
    {
      id: 2,
      avatar:
        "https://images.clarin.com/2019/10/23/los-ros-rodetes-laterales-de___rBsOy-7E_720x0__1.jpg",
      username: "Leia",
      message: "No eres tú, soy yo, abre.",
    },
    {
      id: 3,
      avatar:
        "https://static.vix.com/es/sites/default/files/styles/1x1/public/m/maestro_yoda_star_wars_portada.jpg",
      username: "Yoda",
      message:
        "- No pagaré diezmo y decidle a vuestro señor que el agua es de todos y él sabe que puedo formar un ejercito. - Déjeme leer el contador.",
    },
    {
      id: 4,
      avatar: "https://i.ebayimg.com/images/g/eAcAAOSwfZ1Wbhyh/s-l300.jpg",
      username: "Chubaca",
      message:
        "-Jefe, tiene una reunión a las 10 de la mañana. -Posponlo. -Pos ya lo he puesto.",
    },
    {
      id: 5,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message:
        "Me gustaría haber visto la reunión de Antena 3 en la que un tipo se puso en pie y dijo: Películas de mierda, eso es lo que la gente quiere",
    },
    {
      id: 6,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message:
        "Hace un rato me he quedado sin wifi y he sentido el impulso de pintar bisontes en las paredes.",
    },
    {
      id: 7,
      avatar: "https://randomuser.me/api/portraits/med/men/2.jpg",
      username: "Anakin Skywalker",
      message:
        "No quiero ser alarmista pero mi padre tiene una empresa de alarmas y seguridad y la voy a heredar.",
    },
    {
      id: 8,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message:
        "—Nuestro invitado nos hablará de qué hacer para prevenir la deshidratación. —Beber agua. —Nos queda una hora de programa. —No es mi problema",
    },
    {
      id: 9,
      avatar:
        "https://pm1.narvii.com/6672/d0e7b93cdcb91b9573cd4b1ecf2338cb9d5ecb57_hq.jpg",
      username: "Palpatine",
      message: "Toda ardilla es voladora si la tiras con suficiente fuerza.",
    },
    {
      id: 10,
      avatar:
        "https://www.cronista.com/files/image/165/165028/5ff7ed0dcda89_720_960!.jpg?s=d5ffe01c1f427b528e4851f57eb93f06&d=1617172343",
      username: "Darth Vader",
      message:
        "Todo hombre debería poder tirar al suelo todos los objetos encima de una mesa para poder extender un plano con el que explicar un plan.",
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
