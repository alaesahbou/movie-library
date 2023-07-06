const Card = ({ thumbnail }) => {
    return <img className="card object-cover w-full h-40" src={thumbnail.url} alt={thumbnail.title}/>
}

export default Card