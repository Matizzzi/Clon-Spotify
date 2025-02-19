import ListAlbums from "@/components/ListAlbums";

export default function Home() {
  return (
   < div className="p-8 pt-28 md:pl-72"> {/* Aumenté el padding-top a pt-36 */}
     
      <ListAlbums tittle="Spotify Playlist" />
      <ListAlbums tittle="Dormir" />
      <ListAlbums tittle="Nuevos Exitos" />
      <ListAlbums tittle="En Vivo" />
    </div>
  );
}
