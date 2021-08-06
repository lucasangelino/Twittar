const data = {
  timeline: [
    {
      id: 0,
      avatar: "https://randomuser.me/api/portraits/med/men/1.jpg",
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
      avatar: "https://randomuser.me/api/portraits/med/men/3.jpg",
      username: "Leia",
      message: "No eres tú, soy yo, abre.",
    },
    {
      id: 3,
      avatar: "https://randomuser.me/api/portraits/med/men/4.jpg",
      username: "Yoda",
      message:
        "- No pagaré diezmo y decidle a vuestro señor que el agua es de todos y él sabe que puedo formar un ejercito. - Déjeme leer el contador.",
    },
    {
      id: 4,
      avatar: "https://randomuser.me/api/portraits/med/men/6.jpg",
      username: "Chubaca",
      message:
        "-Jefe, tiene una reunión a las 10 de la mañana. -Posponlo. -Pos ya lo he puesto.",
    },
    {
      id: 5,
      avatar: "https://randomuser.me/api/portraits/med/men/1.jpg",
      username: "Darth Vader",
      message:
        "Me gustaría haber visto la reunión de Antena 3 en la que un tipo se puso en pie y dijo: Películas de mierda, eso es lo que la gente quiere",
    },
    {
      id: 6,
      avatar: "https://randomuser.me/api/portraits/med/men/8.jpg",
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
      avatar: "https://randomuser.me/api/portraits/med/men/8.jpg",
      username: "Palpatine",
      message:
        "—Nuestro invitado nos hablará de qué hacer para prevenir la deshidratación. —Beber agua. —Nos queda una hora de programa. —No es mi problema",
    },
    {
      id: 9,
      avatar: "https://randomuser.me/api/portraits/med/men/8.jpg",
      username: "Palpatine",
      message: "Toda ardilla es voladora si la tiras con suficiente fuerza.",
    },
    {
      id: 10,
      avatar: "https://randomuser.me/api/portraits/med/men/1.jpg",
      username: "Darth Vader",
      message:
        "Todo hombre debería poder tirar al suelo todos los objetos encima de una mesa para poder extender un plano con el que explicar un plan.",
    },
    {
      id: 11,
      avatar: "https://randomuser.me/api/portraits/med/men/4.jpg",
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
