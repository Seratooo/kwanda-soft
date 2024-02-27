export default function Filter() {
  return (
    <div className="flex gap-2">
      <select
        name=""
        id=""
        className="bg-gray-100 py-2 px-4 rounded-sm text-xs text-gray-500 cursor-pointer"
      >
        <option value="">Status</option>
        <option value="">Opção 2</option>
        <option value="">Opção 3</option>
        <option value="">Opção 4</option>
      </select>
      <button className="bg-gray-100 text-gray-500 p-2 rounded-sm text-xs">
        Filtrar
      </button>
    </div>
  );
}
