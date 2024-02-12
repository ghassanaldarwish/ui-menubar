import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';

declare const MenubarMenu: {
    (props: MenubarPrimitive.ScopedProps<MenubarPrimitive.MenubarMenuProps>): JSX.Element;
    displayName: string;
};
declare const MenubarGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const MenubarPortal: React.FC<MenubarPrimitive.MenubarPortalProps>;
declare const MenubarSub: React.FC<MenubarPrimitive.MenubarSubProps>;
declare const MenubarRadioGroup: React.ForwardRefExoticComponent<MenubarPrimitive.MenubarRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const Menubar: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarTrigger: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarSubTrigger: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarSubContent: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarContent: React.ForwardRefExoticComponent<Omit<Omit<MenubarPrimitive.MenubarContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenubarItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarCheckboxItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarRadioItem: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarLabel: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarSeparator: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
declare const MenubarShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
    displayname: string;
};

export { Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger };
