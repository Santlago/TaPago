'use client'

import { destroy } from "@/app/actions/categorias/destroy";
import {  
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button
} from "@nextui-org/react";
import { ChevronDown, Pencil, Trash } from "lucide-react";

export function DropDownActions(){
    return (
        <Dropdown>
        <DropdownTrigger>
            <ChevronDown />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="edit" startContent={<Pencil size={18} />} >editar</DropdownItem>
            <DropdownItem 
                key="delete" 
                startContent={<Trash size={18} />} 
                className="text-danger" 
                color="danger"
                onClick={() => destroy(1)}
            >
            apagar
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}