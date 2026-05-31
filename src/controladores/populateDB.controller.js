import mongoose from "mongoose";

import { User } from "../modelos/user.model.js";
import { Movie } from "../modelos/movie.model.js";

const populateDB = async (req, res) => {
  try {
    console.log(await connection.listDatabases());
    // Si existe la colección users no poblamos la base de datos con los datos iniciales
    if ((await connection.listCollections()).find(col => col.name === "users"))
      res.status(200).json({ ok: true, msg: "No hay necesidad de poblar la base de datos, ya existe" });
    else {
      const movie1Id = new Types.ObjectId();
      const movie2Id = new Types.ObjectId();
      const movie3Id = new Types.ObjectId();
      const movie4Id = new Types.ObjectId();
      const movie5Id = new Types.ObjectId();
      const movie6Id = new Types.ObjectId();
      const movie7Id = new Types.ObjectId();
      const movie8Id = new Types.ObjectId();
      const movie9Id = new Types.ObjectId();
      const movie10Id = new Types.ObjectId();
      const movie11Id = new Types.ObjectId();
      const movie12Id = new Types.ObjectId();
      const movie13Id = new Types.ObjectId();
      const movie14Id = new Types.ObjectId();
      const movie15Id = new Types.ObjectId();
      const movie16Id = new Types.ObjectId();

      const moviesData = [
        {
          _id: movie1Id,
          title: "Origen",
          synopsis: "A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.",
          year: 2010,
          director: "Christopher Nolan",
          genres: ["Aventura"],
          duration: 148
        },
        {
          _id: movie2Id,
          title: "Matrix",
          synopsis: "Cuando una bella desconocida lleva al hacker Neo a un inframundo prohibido, descubre la impactante verdad: la vida que conoce es un elaborado engaño de una ciberinteligencia malvada.",
          year: 1999,
          director: "Lana Wachowski, Lilly Wachowski",
          genres: ["Acción", "Ciencia ficción"],
          duration: 136
        },
        {
          _id: movie3Id,
          title: "Stardust",
          synopsis: "En un pueblo al borde de un mundo mágico, el joven Tristán promete a una chica que le traerá una estrella fugaz para ganarse su amor.",
          year: 2007,
          director: "Matthew Vaughn",
          genres: ["Fantasía", "Aventura"],
          duration: 127
        },
        {
          _id: movie4Id,
          title: "Django desencadenado",
          synopsis: "Con la ayuda de un cazarrecompensas alemán, un esclavo liberado se propone rescatar a su esposa de un brutal propietario de una plantación en Misisipi.",
          year: 2012,
          director: "Quentin Tarantino",
          genres: ["Drama"],
          duration: 165
        },
        {
          _id: movie5Id,
          title: "Star Wars: The Mandalorian and Grogu",
          synopsis: "Tras haber sido un cazarrecompensas solitario, el mandaloriano Din Djarin y su aprendiz Grogu emprenden una nueva y emocionante aventura.",
          year: 2026,
          director: "Jon Favreau",
          genres: ["Ciencia ficción"],
          duration: 132
        },
        {
          _id: movie6Id,
          title: "Blade Runner",
          synopsis: "Un blade runner debe encontrar y retirar a cuatro replicantes que robaron una nave en el espacio y han regresado a la Tierra para encontrar a su creador.",
          year: 1982,
          director: "Ridley Scott",
          genres: ["Ciencia ficción", "Acción"],
          duration: 117
        },
        {
          _id: movie7Id,
          title: "Terminator",
          synopsis: "Un androide aparentemente indestructible viaja desde el año 2029 hasta el año 1984 para asesinar a una camarera cuyo hijo no nacido liderará a la humanidad en una guerra contra las máquinas. Se envía a un combatiente de esa guerra para que proteja a la mujer cueste lo que cueste.",
          year: 1984,
          director: "James Cameron",
          genres: ["Acción", "Aventura", "Ciencia ficción"],
          duration: 107
        },
        {
          _id: movie8Id,
          title: "Terminator 2: El juicio final",
          synopsis: "Un cyborg, idéntico al que fracasó en su intento de matar a Sarah Connor, debe proteger ahora a su hijo adolescente John de un cyborg más avanzado y poderoso.",
          year: 1991,
          director: "James Cameron",
          genres: ["Acción", "Aventura", "Ciencia ficción"],
          duration: 137
        },
        {
          _id: movie9Id,
          title: "Terminator 3: La rebelión de las máquinas",
          synopsis: "Una máquina de un futuro postapocalíptico viaja al pasado para proteger a un hombre y a una mujer de un avanzado asesino robótico y asegurarse de que ambos sobrevivan a un ataque nuclear.",
          year: 2003,
          director: "Jonathan Mostow",
          genres: ["Acción", "Ciencia ficción"],
          duration: 109
        },
        {
          _id: movie10Id,
          title: "Terminator: Salvation",
          synopsis: "En 2018, una misteriosa nueva arma en la guerra contra las máquinas, mitad humano y mitad máquina, llega a John Connor en la víspera de un ataque de la resistencia contra Skynet. ¿Pero de qué lado está? ¿se puede confiar en él?",
          year: 2009,
          director: "McG",
          genres: ["Acción", "Aventura", "Ciencia ficción"],
          duration: 115
        },
        {
          _id: movie11Id,
          title: "Terminator: Génesis",
          synopsis: "Cuando John Connor, líder de la resistencia humana, envía al sargento Kyle Reese a 1984 para proteger a Sarah Connor y salvaguardar el futuro, un giro inesperado de los acontecimientos crea una línea temporal fracturada.",
          year: 2015,
          director: "Alan Taylor",
          genres: ["Acción", "Aventura", "Ciencia ficción"],
          duration: 126
        },
        {
          _id: movie12Id,
          title: "Terminator: Destino oscuro",
          synopsis: "Sarah Connor y una humana mejorada cibernéticamente deben proteger a una joven de un evolucionado y letal terminator líquido que llega desde el futuro.",
          year: 2019,
          director: "Tim Miller",
          genres: ["Acción", "Aventura", "Ciencia ficción"],
          duration: 128
        },
        {
          _id: movie13Id,
          title: "Ali G anda suelto",
          synopsis: "Ali G está siendo utilizado sin saberlo por el canciller británico para derrocar al primer ministro. Pero las cosas no salen según lo planeado.",
          year: 2002,
          director: "Mark Mylod",
          genres: ["Comedia"],
          duration: 87
        },
        {
          _id: movie14Id,
          title: "Regreso al futuro",
          synopsis: "Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.",
          year: 1985,
          director: "Robert Zemeckis",
          genres: ["Aventura", "Comedia", "Ciencia ficción"],
          duration: 116
        },
        {
          _id: movie15Id,
          title: "Regreso al futuro: Parte II",
          synopsis: "Tras visitar 2015, Marty McFly vuelve a 1955 para evitar los desastrosos cambios de 1985... sin interferir con su primer viaje.",
          year: 1989,
          director: "Robert Zemeckis",
          genres: ["Aventura", "Comedia", "Ciencia ficción"],
          duration: 108
        },
        {
          _id: movie16Id,
          title: "Regreso al futuro: Parte III",
          synopsis: "Atrapado en 1955, Marty McFly se entera de la muerte de Doc Brown en 1885 y debe viajar en el tiempo para salvarlo. Sin combustible para el DeLorean, los dos deben averiguar cómo escapar del viejo Oeste antes de que Emmett sea asesinado.",
          year: 1990,
          director: "Robert Zemeckis",
          genres: ["Aventura", "Comedia", "Ciencia ficción"],
          duration: 118
        }
      ];

      const usersData = [
        {
          name: "admin1",
          email: "admin1@example.com",
          password: "12345678",
          rol: "admin"
        }, {
          name: "admin2",
          email: "admin2@example.com",
          password: "87654321",
          rol: "admin"
        }, {
          name: "user1",
          email: "user1@example.com",
          password: "12345678",
          rol: "user",
          favorites: [movie1Id, movie2Id, movie9Id]
        }, {
          name: "user2",
          email: "user2@example.com",
          password: "87654321",
          rol: "user",
          favorites: [movie2Id, movie15Id, movie7Id, movie5Id]
        }
      ];

      await Movie.insertMany(moviesData);
      await User.insertMany(usersData);

      res.status(201).json({ ok: true, msg: "¡Base de datos poblada y relacionada con éxito!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: "Error en la inserción masiva" });
  }
};

export { populateDB };
