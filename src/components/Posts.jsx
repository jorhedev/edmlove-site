import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

/* eslint-disable react/no-unescaped-entities */
export default function Posts() {
  const [data, setData] = useState([]);
  const location = useLocation();

  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const userUrl = import.meta.env.VITE_USER_URL;
  const passUrl = import.meta.env.VITE_PASS_URL;

  useEffect(() => {
    // Función asíncrona para obtener los datos
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/edmNews`, {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: userUrl,
            password: passUrl,
          },
        });

        setData(res?.data); // Establece los datos en el estado
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que la llamada se haga solo una vez


  return (
    <div>
      <section>
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              From The Blog: Últimas Noticias de la Escena EDM
            </h1>

            <p className="max-w-lg mx-auto font-semibold mt-8 text-gray-500 mb-12">
              ¡Bienvenidos a nuestra sección "From The Blog" donde te traemos
              las últimas noticias y novedades de la vibrante escena EDM!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
            {data.map((post) => (
              <Link
                to={`/post/${post.id}`}
                key={post.id} // Asegúrate de que `post.id` sea único
              >
                <div>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src={post?.image}
                    alt={post?.title} // Mejora la accesibilidad con alt text
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                    <div
                      href="#"
                      className="font-bold text-gray-800 hover:underline md:text-xl"
                    >
                      {post?.title}
                    </div>

                    <p className="mt-3 font-semibold text-sm text-gray-500 md:text-sm">
                      {post?.description}
                    </p>

                    <p className="mt-3 text-sm text-blue-500">
                      {moment(post.date).format("MM, D, YYYY")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
