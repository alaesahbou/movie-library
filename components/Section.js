import Card from './Card'

const Section = ({id, genre, videos }) => {
    return (
        <div className="section" id={id}>
            <h3 className="text-xl font-semibold mb-4">{genre}</h3>
            <div className="grid grid-cols-4 gap-4">
                {videos.map((video) => (
                <a key={video.id} href={`/video/${video.slug}`} className="block">
                    <div className="relative aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                    <Card thumbnail={video.thumbnail} />
                    <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 hover:opacity-100 flex items-center justify-center">
                        <p className="text-white text-lg">{video.title}</p>
                    </div>
                    </div>
                </a>
                ))}
            </div>
        </div>
    )
}

export default Section