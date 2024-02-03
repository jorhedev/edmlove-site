import { useParams } from "react-router-dom";
import { dataPost } from "../data";
import Footer from "../components/Footer";

export default function PostSingle() {
  const { id } = useParams();

  const post = dataPost.find((post) => post.id === parseInt(id)); // Busca la publicación por su ID

  if (!post) {
    return <h1>Publicación no encontrada</h1>;
  }

  console.log(post);

  return (
    <div className="mt-8">
      <section className="bg-white">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:-mx-6">
            <div className="w-full lg:px-6">
              <img
                className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src={post?.image}
                alt=""
              />

              <div>
                <p className="mt-6 text-sm text-blue-500 uppercase">{post.date}</p>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {post.title}
                </h1>

                <h2 className="mt-6 text-lg leading-8 text-gray-600">
                  {post.description}
                </h2>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""
                  />

                  <div className="mx-4">
                    <h1 className="text-sm text-gray-700 ">{post.by}</h1>
                    {/* <p className="text-sm text-gray-500 ">Lead Developer</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
