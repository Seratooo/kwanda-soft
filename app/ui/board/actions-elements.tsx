import { Share2, StretchHorizontal, StretchVertical } from "lucide-react";

export default function ActionsElements() {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-teal-100 p-2 rounded-sm cursor-pointer">
        <StretchVertical className="size-5 text-gray-500" />
      </div>
      <div className="bg-white p-2 rounded-sm cursor-pointer">
        <StretchHorizontal className="size-5 text-gray-500" />
      </div>
      <button className="flex gap-1 bg-teal-900 p-2 text-sm text-white items-center rounded-sm">
        <Share2 className="size-4 text-white" />
        <p>Partilhar</p>
      </button>
    </div>
  );
}
