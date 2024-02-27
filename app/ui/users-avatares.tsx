import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { avatarProps } from "@/lib/definitions";

export function AvatarComponent({
  linkAvatarImage,
  avatarFallback,
  name,
}: avatarProps) {
  return (
    <Avatar className="size-8 cursor-pointer hover:border-teal-500 hover:border-[2px]">
      <AvatarImage src={linkAvatarImage} alt={`avatar@${name}`} />
      <AvatarFallback className="bg-orange-200">
        {avatarFallback}
      </AvatarFallback>
    </Avatar>
  );
}

export function UserAvatares() {
  const avatares = [
    {
      linkAvatarImage: "https://github.com/seratooo.png",
      avatarFallback: "AB",
      name: "Abubacar",
    },
    {
      linkAvatarImage: "https://github.com/seratooo.png",
      avatarFallback: "AB",
      name: "Abubacar",
    },
    {
      linkAvatarImage: "https://github.com/seratooo.png",
      avatarFallback: "AB",
      name: "Abubacar",
    },
    {
      linkAvatarImage: "https://github.com/seratooo.png",
      avatarFallback: "AB",
      name: "Abubacar",
    },
    {
      linkAvatarImage: "https://github.com/seratooo.png",
      avatarFallback: "AB",
      name: "Abubacar",
    },
  ];

  return (
    <div className="flex -space-x-1">

      {avatares.map(({ linkAvatarImage, avatarFallback, name }, index) => (
        <AvatarComponent
          linkAvatarImage={linkAvatarImage}
          avatarFallback={avatarFallback}
          name={name}
          key={index}
        />
      ))}

      <Avatar className="size-8 border-gray-300 border-[2px] bg-white cursor-pointer hover:border-teal-500">
        <AvatarFallback className="text-gray-500 bg-white">+5</AvatarFallback>
      </Avatar>
    </div>
  );
}
