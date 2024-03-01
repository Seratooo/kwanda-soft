import { cardUserProps } from "@/lib/definitions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CardPatient({
  linkAvatarImage,
  avatarFallback,
  name,
  description,
}: cardUserProps) {
  return (
    <div className="flex gap-4 items-center justify-center bg-gray-100 m-2 md:m-2 p-2 rounded-md">
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

export async function CardsPatients() {
  async function getPatients() {
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
  const users = await getPatients();
  return (
    <>
      {users.map((user, index) => (
        <CardPatient
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