'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Work', icon: '/assets/about.png', path: '/work' },
    { name: 'Home', icon: '/assets/home.png', path: '/' },
    { name: 'Bio', icon: '/assets/bio.png', path: '/about' },
  ];

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div 
        className="flex items-center gap-2 bg-black/40 backdrop-blur-lg p-2 rounded-lg border border-white/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Link href={item.path} className="block w-10 h-10">
                  <Button
                    variant={pathname === item.path ? "secondary" : "ghost"}
                    size="icon"
                    className={`
                      w-10 h-10 rounded-lg transition-colors duration-200
                      ${pathname === item.path 
                        ? 'bg-white text-black hover:!bg-white/90' 
                        : 'text-white hover:!bg-white/10'
                      }
                      !p-0 !m-0 !border-0 transform-none hover:transform-none
                    `}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="w-5 h-5 pointer-events-none"
                      draggable={false}
                    />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent 
                side="top" 
                className="bg-black/80 border border-white/10 text-white"
                sideOffset={8}
              >
                {item.name}
                <TooltipPrimitive.Arrow className="fill-black/80" />
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </motion.div>
    </nav>
  );
};

export default Navigation; 