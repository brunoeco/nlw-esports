
interface GameBannerProps {
    title: string;
    bannerUrl: string;
    adCount: number;
}

export function GameBanner({title, adCount, bannerUrl}: GameBannerProps) {

  return (
    <a href="#" className='relative rounded-lg overflow-hidden'>
    <img src={bannerUrl} alt={title} />

    <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{title}</strong>
        <span className='text-sm text-zinc-300 block'>{adCount} anúncios</span>
    </div>
    </a>
  )
}
