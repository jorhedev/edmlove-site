import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function Posts() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Cantidad de posts por página en la paginación
  const latestPostsLimit = 8; // Cantidad de posts a mostrar fuera de /post

  const location = useLocation();
  const pathname = location.pathname;

  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const userUrl = import.meta.env.VITE_USER_URL;
  const passUrl = import.meta.env.VITE_PASS_URL;

  useEffect(() => {
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

        setData(res?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // 🔹 Si estamos en /post aplicamos paginación, sino mostramos las últimas 8 noticias
  let displayedPosts;
  if (pathname === "/post") {
    // Calcular los posts de la página actual cuando estamos en /post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    displayedPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    // Mostrar solo las últimas 8 noticias fuera de /post
    displayedPosts = data.slice(0, latestPostsLimit);
  }

  // 🔹 Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

            {pathname !== "/post" && (
              <p className="max-w-lg mx-auto font-semibold mt-8 text-gray-500 mb-12">
                Si quieres ver noticias anteriores ve a la sección de noticias{" "}
                <a href="/post" className="text-blue-500 hover:underline">
                  Noticias
                </a>
              </p>
            )}
          </div>

          {/* 🔹 Mostrar los posts filtrados */}
          <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
            {displayedPosts.map((post) => (
              <Link to={`/post/${post.id}`} key={post.id}>
                <div>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src={post?.image}
                    alt={post?.title}
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                    <div className="font-bold text-gray-800 hover:underline md:text-xl">
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

          {/* 🔹 Mostrar paginación solo cuando estamos en /post */}
          {pathname === "/post" && (
            <div className="flex justify-center mt-10 space-x-2">
              {Array.from({ length: Math.ceil(data.length / postsPerPage) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 text-sm font-medium border rounded-md ${
                    currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
