interface ApresentationProps {}
const Apresentation = ({}) => {
  return (
    <div className="my-4 flex flex-col items-center space-y-2">
      <h1 className="text-4xl font-bold text-black">
        Bem-vindo ao Sistema de Administração dos Servidores do Altar
      </h1>
      <p className="text-lg text-bege max-w-2xl mb-8">
        Gerencie com eficiência os servidores, funções e escalas semanais para
        garantir uma organização impecável em cada celebração.
      </p>
    </div>
  );
};
export default Apresentation;
