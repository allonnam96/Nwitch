import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
    subsets: ['latin'],
    weight: ["200", "300", "400", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='p-1'>
                <Image
                    src="/spooky.svg"
                    alt='nwitch'
                    height="80"
                    width="80"
                />
            </div>
            <div className={cn(
                "flex flex-col items-center",
                font.className,
            )}>
                <p className="text-xl font-semibold">
                    Nwitch
                </p>
                <p className="text-sm text-muted-foreground">
                    LIVE NOW
                </p>
            </div>
        </div>
    )
}