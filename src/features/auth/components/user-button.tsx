"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useAuthActions } from "@convex-dev/auth/react";
import { Loader, LogOut } from "lucide-react";

function UserButton() {
  const { data, isLoading } = useCurrentUser();

  if (isLoading) {
    return <Loader className="size-4 animate-spin text-muted-foreground" />;
  }

  if (!data) {
    return null; // No user logged in yet, don't show the button.
  }

  const { image, name, email } = data;
  const avatarFallback =  name!.charAt(0).toUpperCase()
  const {signOut} = useAuthActions()


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage  alt={name} src={image}/>
          <AvatarFallback>
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
        <DropdownMenuContent align="center" side="right" className="w-60">
          <DropdownMenuItem onClick={()=>signOut()}>
            <LogOut className="size-4 mr-2"/>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default UserButton;
