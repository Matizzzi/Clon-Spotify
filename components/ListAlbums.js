import React from 'react';
import Link from 'next/link';
import Card from './Card';

const ListAlbums = (props) => {
  const { tittle, albums } = props;

  return (
    <div className='mb-8'>
      {/* Titulo y enlace "Ver Todo" */}
      <div className='flex items-center justify-between mb-8'>
        <Link href="/" className='text-2xl font-bold text-gray-100 hover:underline'>
          {tittle}
        </Link>
        <Link href="/" className='uppercase text-sm font-bold tracking-[2px] hover:underline'>
          Ver Todo
        </Link>
      </div>
      
      {/* Grid de tarjetas */}
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ListAlbums;
