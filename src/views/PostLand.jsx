import Footer from "../components/Footer";
import Posts from "../components/Posts";
import { dataPost } from "../data";


export default function PostLand () {

    return(
        <div className="mt-9">
        <Posts data={dataPost}/>
        <Footer/>
        </div>
    )
}