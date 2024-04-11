"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number) {

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(`${process.env.API_BASE_URL}/categoria/${id}`, { next: { revalidate: 0 } })

    redirect("/categorias")
}