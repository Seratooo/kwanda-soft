import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-gray-100 text-gray-500 p-2 rounded-sm text-xs">
            Filtrar
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <button type="submit">Save changes</button>
        </DialogFooter>
      </DialogContent>
      </Dialog>
    </div>
  );
}
