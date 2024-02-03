import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // Importa PropTypes

/* eslint-disable react/no-unescaped-entities */
export default function Posts({data}) {



  return (
    <div>
      <section>
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
            From The Blog: Últimas Noticias de la Escena EDM
            </h1>

            <p className="max-w-lg mx-auto font-semibold mt-4 text-gray-500">
            ¡Bienvenidos a nuestra sección "From The Blog" donde te traemos las últimas noticias y novedades de la vibrante escena EDM!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {data?.map((post) => (
              <Link to={ `post/${post.id}`} key={post.id}>
              <div key={post.id}>
                
                <div>
                  <img
                    className="relative z-10 object-cover w-full rounded-md h-96"
                    src={post?.image}
                    alt=""
                  />

                  <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow ">
                    <a
                      href="#"
                      className="font-bold text-gray-800 hover:underline md:text-xl"
                    >
                      {post?.title}
                    </a>

                    <p className="mt-3 font-semibold text-sm text-gray-500  md:text-sm">
                      {post?.description}
                    </p>

                    <p className="mt-3 text-sm text-blue-500">
                      {post?.date}
                    </p>

                  </div>
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

Posts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      // Añade otras PropTypes según las propiedades de tus datos de publicaciones
    })
  ).isRequired,
};