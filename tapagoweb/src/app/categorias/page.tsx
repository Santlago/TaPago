import NavBar from "@/components/navbar"
import { ChevronDown, Utensils } from "lucide-react";
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/react";

export default function Categorias() {

  const categorias = [
    {
      id: 1,
      nome: "Alimentação",
      icone: "apple"
    },
    {
      id: 2,
      nome: "Educação",
      icone: "graduation-cap"
    },
    {
      id: 3,
      nome: "Lazer",
      icone: "cigarette"
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />
      <h1>Categorias</h1>

      <section className="bg-slate-900 rounded min-w-[500px] p-2 m-4">
        <h2 className="text-2xl font-semibold">Categorias Cadastradas</h2>
        <Button>Nova categoria</Button>
        <div id="data">
          {categorias.map(categoria => <CategoriaItem categoria={categoria} />)}

        </div>
      </section>
    </main>
  );
}
