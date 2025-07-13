import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className=" flex w-full min-h-screen justify-center items-center flex-col text-white">
      <h1 className="font-bold text-6xl mb-2">404</h1>
      <h1 className="font-bold text-4xl mb-2">Página não encontrada</h1>
      <p className="italic mb-4">Você acessou uma página que não exite</p>

      <Link className="bg-gray-50/20 py-1 px-4 rounded-md" to="/">
        Voltar para home
      </Link>
    </div>
  );
};

export default ErrorPage;
