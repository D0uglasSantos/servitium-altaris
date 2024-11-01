interface FunctionCardProps {
  title: string;
  description: string;
}

const FunctionCard = ({ title, description }: FunctionCardProps) => {
  return (
    <div className="bg-bege/70 shadow-lg rounded-lg p-6 flex-1 text-left hover:bg-bege hover:-translate-y-1 hover:scale-105 transition-all">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

const FunctionCards = () => {
  const cardsData = [
    {
      title: "Cadastro de Servidores",
      description:
        "Adicione novos servidores, edite informações e mantenha todos atualizados com facilidade.",
    },
    {
      title: "Escalas Semanais",
      description:
        "Crie e organize escalas de forma rápida para que cada missa esteja devidamente coordenada.",
    },
    {
      title: "Acompanhamento de Status",
      description:
        "Mantenha-se informado sobre a disponibilidade e o status dos servidores em tempo real.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row md:space-x-10 space-y-8 md:space-y-0 my-10 ">
      {cardsData.map((card, index) => (
        <FunctionCard
          key={index}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default FunctionCards;
