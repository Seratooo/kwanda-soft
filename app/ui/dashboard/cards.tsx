import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cardBoardProps, cardUserProps } from "@/lib/definitions";

export function CardBoard({
  title,
  value,
  variation,
  cardColor,
}: cardBoardProps) {
  return (
    <div
      className={`${cardColor} h-[6.5rem] w-full lg:w-full 2xl:w-60 md:w-56 p-2 md:p-4 rounded-md`}
    >
      <p className="text-sm">{title}</p>
      <p className="text-gray-700 font-bold text-4xl">{value}</p>
      <span className="flex gap-1 items-center">
        <div className="h-0 w-0 border-b-[12px] border-l-[7px] border-r-[7px] border-b-teal-900 border-l-transparent border-r-transparent" />
        <p className="text-sm">{variation}</p>
      </span>
    </div>
  );
}

export async function CardsBoard() {
  async function getData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = [
      {
        title: "Pacientes a espera",
        value: 12,
        variation: "5.98%",
        cardColor: "bg-teal-100",
      },
      {
        title: "Pacientes atendidos",
        value: 487,
        variation: "7.24%",
        cardColor: "bg-teal-100",
      },
      {
        title: "Consultas agendadas",
        value: 122,
        variation: "2.02%",
        cardColor: "bg-gray-100",
      },
    ];

    return data;
  }
  const data = await getData();
  return (
    <>
      {data.map((element, index) => (
        <CardBoard
          title={element.title}
          value={element.value}
          variation={element.variation}
          cardColor={element.cardColor}
          key={index}
        />
      ))}
    </>
  );
}

export function CardUser({
  linkAvatarImage,
  avatarFallback,
  name,
  description,
}: cardUserProps) {
  return (
    <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-4 p-2 rounded-md">
      <Avatar>
        <AvatarImage src={linkAvatarImage} alt={`avatar@${name}`} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-bold w-40">{name}</p>
        <p className="text-gray-400 text-xs w-40">{description}</p>
      </div>
    </div>
  );
}

export async function CardsUser() {
  async function getUsers() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = [
      {
        avatarFallback: "AB",
        name: "Abubacar Correia",
        description: "In eu do do cillum lorem exercitation ea dolor.",
        linkAvatarImage: "https://github.com/seratooo.png",
      },
      {
        avatarFallback: "AB",
        name: "Abubacar Correia",
        description: "In eu do do cillum lorem exercitation ea dolor.",
        linkAvatarImage: "",
      },
      {
        avatarFallback: "AB",
        name: "Abubacar Correia",
        description: "In eu do do cillum lorem exercitation ea dolor.",
        linkAvatarImage: "https://github.com/seratooo.png",
      },
      {
        avatarFallback: "AB",
        name: "Abubacar Correia",
        description: "In eu do do cillum lorem exercitation ea dolor.",
        linkAvatarImage: "https://github.com/seratooo.png",
      },
      {
        avatarFallback: "AB",
        name: "Abubacar Correia",
        description: "In eu do do cillum lorem exercitation ea dolor.",
        linkAvatarImage: "",
      },
    ];

    return data;
  }
  const users = await getUsers();
  return (
    <>
      <div className="flex justify-between items-center p-2 md:p-4">
        <p className="text-sm font-bold block">Actividades</p>
        <select
          name=""
          id="select2"
          defaultValue="M"
          className="p-2 bg-gray-100 rounded-md text-xs"
        >
          <option value="D">Diariamente</option>
          <option value="M">Mensalmente</option>
          <option value="A">Anualmente</option>
        </select>
      </div>
      {users.map((user, index) => (
        <CardUser
          avatarFallback={user.avatarFallback}
          name={user.name}
          description={user.description}
          linkAvatarImage={user.linkAvatarImage}
          key={index}
        />
      ))}
    </>
  );
}
