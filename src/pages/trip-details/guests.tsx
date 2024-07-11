import { CircleDashed, UserCog } from "lucide-react";

export const Guests = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">
        Convidados
      </h2>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>

            <span className="block text-sm text-zinc-400 truncate">
              jessica.white@yahoo.com
            </span>
          </div>

          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
        
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Dr. Rita Pacocha
            </span>

            <span className="block text-sm text-zinc-400 truncate">
              rita.pacocha@gmail.com
            </span>
          </div>

          <CircleDashed className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <button
        className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2"
      >
        <UserCog className="size-5" />
        Gerenciar convidados
      </button>
    </div>
  );
}
