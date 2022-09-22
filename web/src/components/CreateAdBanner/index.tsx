import { MagnifyingGlassPlus } from 'phosphor-react';

interface CreateAdBannerProps {
}

export function CreateAdBanner({}: CreateAdBannerProps) {

  return (
    <div className='pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncion para encontrar novos players!</span>
          </div>
          <button className='flex items-center gap-3 px-4 py-3 bg-violet-500 text-white rounded hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
  )
}
