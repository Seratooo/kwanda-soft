import { Clock8, MoreHorizontal, PlusCircle } from "lucide-react";
import { AvatarComponent } from "../users-avatares";
import { cardOfBoardProps } from "@/lib/definitions";

function Column({
  children,
  title,
  nCards,
}: {
  children: React.ReactNode;
  title: string;
  nCards: number;
}) {
  return (
    <>
      <div className="flex gap-12 items-center">
        <p className="text-xs font-bold text-gray-700">{title}</p>
        <span className="bg-gray-300 text-xs text-gray-700 w-5 h-5 flex items-center justify-center rounded-full font-bold">
          {nCards}
        </span>
      </div>
      {children}
    </>
  );
}

function Card({
  linkAvatarImage,
  avatarFallback,
  name,
  description,
  hours,
  cardColor
}: cardOfBoardProps) {
  return (
    <div>
      <div className="bg-white rounded-sm w-full h-24 p-3 flex space-x-3 shadow-teal-100">
        <div>
          <AvatarComponent
            linkAvatarImage={linkAvatarImage}
            avatarFallback={avatarFallback}
            name={name}
          />
        </div>
        <div className="space-y-1/5 w-full">
          <div className="flex justify-between w-full">
            <p className="text-sm font-medium">{name}</p>
            <MoreHorizontal className="cursor-pointer" />
          </div>
          <p className="text-xs text-gray-500">{description}</p>
          <div className="flex gap-1 items-center mt-3">
            <Clock8 className="size-4 text-gray-500" />
            <p className="text-xs text-gray-500">{hours}</p>
          </div>
        </div>
      </div>
      <div className={`${cardColor} text-white rounded-full w-full h-1`}></div>
    </div>
  );
}

export function ColumnCards() {
  const columnsAndCards = [
    {
      titleColumn: "EM ESPERA / AGENDADOS",
      cards: [
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-red-500/50'
        },
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-red-500/50'
        },
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-orange-500/50'
        },
      ],
    },
    {
      titleColumn: "TRIAGEM",
      cards: [
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-orange-500/50'
        },
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-blue-500/50'
        },
      ],
    },
    {
      titleColumn: "TRATAMENTO",
      cards: [
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-blue-500/50'
        },
      ],
    },
    {
      titleColumn: "AVALIAÇÃO",
      cards: [
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-blue-500/50'
        },
      ],
    },
    {
      titleColumn: "ATENDIDOS",
      cards: [
        {
          linkAvatarImage: "https://github.com/seratooo.png",
          avatarFallback: "AC",
          name: "Abubacar Correia",
          description: "Aliquip ea aliquip nostrud",
          hours: "2h ago",
          cardColor: 'bg-blue-500/50'
        },
      ],
    },
  ];

  return (
    <>
      {columnsAndCards.map(({ titleColumn, cards }, index) => (
        <div className="bg-gray-100 h-auto w-72 rounded-sm p-3 space-y-2">
          <Column title={titleColumn} nCards={cards.length}>
            {cards.map((card, index) => (
              <Card
                linkAvatarImage={card.linkAvatarImage}
                avatarFallback={card.avatarFallback}
                name={card.name}
                description={card.description}
                hours={card.hours}
                cardColor={card.cardColor}
              />
            ))}
            <button className="flex items-center justify-center gap-2 p-2 bg-teal-100 w-full rounded-sm shadow-sm">
              <PlusCircle className="size-4 text-teal-900" />
              <p className="text-xs text-teal-900">Adicionar paciente</p>
            </button>
          </Column>
        </div>
      ))}
    </>
  );
}
