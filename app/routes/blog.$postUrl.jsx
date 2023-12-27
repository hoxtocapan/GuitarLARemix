import { getPost } from "../models/posts.server";
import { formatearFecha } from "../utils/helpers";
import {
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <p className="error">
          {" "}
          {error.status} {error.statusText}{" "}
        </p>
        <Link className="error-enlace" to="/">
          Tal vez quieras volver a la pagina principal
        </Link>
      </div>
    );
  }
}

export async function loader({ params }) {
  const { postUrl } = params;

  const post = await getPost(postUrl);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no Encontrada",
    });
  }

  return post;
}

export function meta({ data }) {
  console.log(data);

  if (!data) {
    return [
      {
        title: `GuitarLA - Post no Encontrada`,
      },
    ];
  }

  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.titulo}`,
    },
  ];
}

function Post() {
  const post = useLoaderData();

  console.log(post.data[0].attributes);

  const { titulo, contenido, imagen, publishedAt } = post?.data[0]?.attributes;
  const texto = contenido[0].children[0].text;

  console.log(titulo);

  return (
    <article className="post mt-3">
      <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`imagen blog ${titulo}`}
      />

      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{texto}</p>
      </div>
    </article>
  );
}

export default Post;
