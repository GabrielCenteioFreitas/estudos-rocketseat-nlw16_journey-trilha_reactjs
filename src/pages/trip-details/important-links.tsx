import { Link2, Plus } from "lucide-react";

export const ImportantLinks = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">
        Links importantes
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>

            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.airbnb.com.br/rooms/104700011913254809712780410
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>

            <a href="#" className="block text-xs text-zinc-400 hover:text-zinc-200 truncate">
              https://www.airbnb.com.br/rooms/104700011913254809712780410
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <button
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2"
      >
        <Plus className="size-5" />
        Cadastrar novo link
      </button>
    </div>

  );
}
