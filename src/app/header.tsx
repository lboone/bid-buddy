import {
  SignedIn,
  SignedOut,
  SignInGithubButton,
  UserAvatar,
} from "@/components/auth";
import { Button } from "@/components/ui/button";
import {
  AudioWaveform,
  GavelIcon,
  Home,
  LayoutDashboard,
  LayoutDashboardIcon,
  LayoutPanelLeft,
  Scroll,
} from "lucide-react";
import Link from "next/link";

const MenuItems = [{
    name: 'Home',
    href: '/',
    icon: Home,
},
{
    name: 'Items',
    href: '/items',
    icon: AudioWaveform,
},
{
    name: 'Bids',
    href: '/bids',
    icon: GavelIcon,
},
{
    name: 'Settings',
    href: '/settings',
    icon: LayoutDashboardIcon,
}
]
const Header = () => {
  return (
    <div className="bg-zinc-100 py-4 border-b border-zinc-200 drop-shadow">
      <div className="container flex items-center justify-between gap-2">
        <Link href="/">
        <div className="flex items-center gap-2 ">
          <AudioWaveform
            size={50}
            className="text-white bg-amber-700 rounded-full p-2"
          />
          <div className="flex items-center gap-0">
            <span className="font-bold text-amber-700 text-2xl">Bid Buddy</span>
            <span className="text-2xl font-bold text-zinc-600">.com</span>
          </div>
        </div>
        </Link>
        <div className="flex items-center gap-4 justify-center ">
          {MenuItems.map((item) => (
            <div key={item.name}>
              <a href={item.href}>
                <div>
                <Button variant="primary" className="rounded-full">
                <item.icon className="size-[24px] group-hover:text-white mr-2" />
                <span className="group-hover:text-white font-semibold">{item.name}</span>
                </Button>
                </div>
                
              </a>
            </div>
          ))}   
        </div>
        <div className="flex items-center gap-2">
          <SignedOut>
            <div>
              <SignInGithubButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div>
              <UserAvatar />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
