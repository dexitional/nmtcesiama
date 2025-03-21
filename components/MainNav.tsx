import React from 'react'
import { MdDoubleArrow } from "react-icons/md";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from './ui/menubar';

type Props = {
    data: any;
}

function MainNav({ data }: Props) {
  return (
    <nav className="flex items-center space-x-10 font-sans font-bold text-lg text-[#0E1A62]">
        <Menubar className="flex items-center space-x-10 border-0">
            { data?.map((r:any,i:number) => (
                <MenubarMenu key={i} >
                    {/* <Link href={r.link} legacyBehavior passHref>
                        <MenubarLink className={navigationMenuTriggerStyle()}>
                        {r.label}
                        </MenubarLink>
                    </Link> */}
                    <MenubarTrigger className="text-lg font-bold cursor-pointer">{r.label}</MenubarTrigger>
                    <MenubarContent className="font-sans rounded-none">
                        <ul className="py-3 w-62 font-medium text-base">
                        { r?.subMenu?.map((s:any) => (
                            <Link key={s?.label} href={s.link}>
                                <div>
                                    <div  className="px-4 py-2 w-full hover:text-primary text-[#0E1A62]">{s?.label}</div>
                                </div>
                            </Link>
                        ))}
                        </ul>
                    </MenubarContent>
                </MenubarMenu>
            ))}
                
        </Menubar>
        <Link href="/contact" className="px-8 py-3 bg-[#0E1A62] cursor-pointer text-white flex items-center space-x-2 justify-between">
          <span className="font-bold ">CONTACT US</span>
          <MdDoubleArrow className="h-6 w-6" />
        </Link>
    </nav>
  )
}

export default MainNav