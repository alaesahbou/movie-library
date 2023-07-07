import {gql, GraphQLClient} from 'graphql-request'
import Section from "../components/Section"
import NavBar from "../components/NavBar"
import disneyLogo from '../public/disney-button.png'
import marvelLogo from '../public/marvel-button.png'
import natgeoLogo from '../public/natgeo-button.png'
import starwarsLogo from '../public/star-wars-button.png'
import pixarLogo from '../public/pixar.png'

export const getStaticProps = async () => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization": `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        }
    })

    const videosQuery = gql`
    query {
      videos {
        createdAt,
        id,
        title,
        description,
        seen,
        slug,
        tags,
        thumbnail {
          url
        },
        mp4 {
          url
        }
      }
    }
  `

    const accountQuery = gql`
    query {
    account(where: { id: "cljqgc7lqvyrv0bvxdoovwso7"}) {
      username
      avatar {
        url
      }
    }
  }
  `

    const data = await graphQLClient.request(videosQuery)
    const videos = data.videos
    const accountData = await graphQLClient.request(accountQuery)
    const account = accountData.account

    return {
        props: {
            videos,
            account
        }
    }
}


const Home = ({videos, account}) => {


    const randomVideo = (videos) => {
        return videos[Math.floor(Math.random() * videos.length)]
    }

    const filterVideos = (videos, genre) => {
        return videos.filter((video) => video.tags.includes(genre))
    }

    const unSeenVideos = (videos) => {
        return videos.filter(video => video.seen == false || video.seen == null)
    }

    console.log('not seen:', videos.filter(video => video.seen == false || video.seen == null))


    return (
        <>
            <NavBar account={account} videos={videos} />
                <div className="app bg-gray-900 text-white">
                    <div className="main-video">
                    <img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title} />
                    </div>

                    <div className="video-feed flex items-center justify-center mt-6">
                    <a href="#disney">
                        <div className="franchise mr-2">
                        <img src={disneyLogo.src} alt="Disney" />
                        </div>
                    </a>
                    <a href="#pixar">
                        <div className="franchise mr-2">
                        <img src={pixarLogo.src} alt="Pixar" />
                        </div>
                    </a>
                    <a href="#star-wars">
                        <div className="franchise mr-2">
                        <img src={starwarsLogo.src} alt="Star Wars" />
                        </div>
                    </a>
                    <a href="#nat-geo">
                        <div className="franchise mr-2">
                        <img src={natgeoLogo.src} alt="National Geographic" />
                        </div>
                    </a>
                    <a href="#marvel">
                        <div className="franchise mr-2">
                        <img src={marvelLogo.src} alt="Marvel" />
                        </div>
                    </a>
                    </div>

                    <Section genre={'Recommended for you'} videos={unSeenVideos(videos)} />
                    <Section genre={'Family'} videos={filterVideos(videos, 'family')} />
                    <Section genre={'Thriller'} videos={filterVideos(videos, 'thriller')} />
                    <Section genre={'Classic'} videos={filterVideos(videos, 'classic')} />
                    <Section id="pixar" genre={'Pixar'} videos={filterVideos(videos, 'pixar')} />
                    <Section id="marvel" genre={'Marvel'} videos={filterVideos(videos, 'marvel')} />
                    <Section
                    id="nat-geo"
                    genre={'National Geographic'}
                    videos={filterVideos(videos, 'national-geographic')}
                    />
                    <Section id="disney" genre={'Disney'} videos={filterVideos(videos, 'disney')} />
                    <Section id="star-wars" genre={'Star Wars'} videos={filterVideos(videos, 'star-wars')} />
                </div>
        </>
    )
}

export default Home










