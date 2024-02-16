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

              <div className=" flex flex-col items-center justify-center text-center">
                <p className="mt-6 text-sm text-blue-500 uppercase">
                  {post?.date}
                </p>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {post?.title}
                </h1>

                <h2 className="mt-9 text-lg leading-8 text-gray-600 ">
                  {post?.introduction}
                </h2>

                <p className="mt-6 text-lg leading-8 text-gray-600 w-90 ">
                  {post?.conclusion}
                </p>

                <div className="flex items-center mt-6">
                  <img
                    className="object-cover object-center w-10 h-10 rounded-full"
                    src="https://scontent.fmex19-1.fna.fbcdn.net/v/t39.30808-6/418447227_10211057976921884_8625459629776588181_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEe-2ZAGr5Ohmc9kXNW9OJ_P8F-Dw6ylg0_wX4PDrKWDRfCR06f7f0lsPeiy4jb1o8&_nc_ohc=eUKxUo_FaB0AX9FcIS1&_nc_ht=scontent.fmex19-1.fna&oh=00_AfA1cnQFHVgD-2LyL6ePLEMjQ2it2CXKyb306Ao6dQy_Ww&oe=65D4F8EC"
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
