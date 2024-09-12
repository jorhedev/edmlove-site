import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Importar useNavigate

export default function CreatePost() {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const userUrl = import.meta.env.VITE_USER_URL;
  const passUrl = import.meta.env.VITE_PASS_URL;

  const navigate = useNavigate();  // Inicializar useNavigate

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    introduction: "",
    climax: "",
    conclusion: "",
    author: "",
    image: "",
    date: "",
  });

  const [isLoading, setIsLoading] = useState(false);  // Estado para manejar el loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (Object.values(formData).some(value => value === "")) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);  // Desactivar el botón durante el envío
    try {
      const response = await axios.post(
        `${apiUrl}/edmNews/createNews`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
          auth: { username: userUrl, password: passUrl },
        }
      );

      if (response.status === 201) {
        setFormData({
          id: "",
          title: "",
          description: "",
          introduction: "",
          climax: "",
          conclusion: "",
          author: "",
          image: "",
          date: "",
        });

        navigate("/");  // Redirigir a la página principal después de crear el post
      }
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setIsLoading(false);  // Reactivar el botón después del envío
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12" style={{ marginTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 mt-12">
          {/* Post Information Section */}
          <div className="border-b border-gray-900/10 pb-12">
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Post Information
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Enter the details for your post.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <div className="w-full max-w-4xl">
                <div className="flex flex-col items-center p-4">
                  {[
                    { id: "id", label: "id Title", type: "text" },
                    { id: "title", label: "Title", type: "text" },
                    {
                      id: "description",
                      label: "Description",
                      type: "textarea",
                    },
                    {
                      id: "introduction",
                      label: "Introduction",
                      type: "textarea",
                    },
                    { id: "climax", label: "Climax", type: "textarea" },
                    {
                      id: "conclusion",
                      label: "Conclusion",
                      type: "textarea",
                    },
                    { id: "author", label: "Author", type: "text" },
                    { id: "image", label: "Image URL", type: "text" },
                    { id: "date", label: "Date", type: "date" },
                  ].map(({ id, label, type }) => (
                    <div key={id} className="mb-4 w-full max-w-lg p-4">
                      <label
                        htmlFor={id}
                        className="block text-sm font-medium leading-6 text-gray-900 text-left"
                      >
                        {label}
                      </label>
                      <div className="mt-2">
                        {type === "textarea" ? (
                          <textarea
                            id={id}
                            name={id}
                            rows={3}
                            value={formData[id]}
                            onChange={handleChange}
                            placeholder={`${label} of the post`}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        ) : (
                          <input
                            id={id}
                            name={id}
                            type={type}
                            value={formData[id]}
                            onChange={handleChange}
                            placeholder={`${label} of the post`}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isLoading}  // Botón desactivado cuando isLoading es true
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
