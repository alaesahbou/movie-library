import { gql, GraphQLClient } from 'graphql-request'
import { useState } from 'react';
import ReactPlayer from 'react-player';

export const getServerSideProps = async (pageContext) => {
    const url = process.env.ENDPOINT
    const graphQLClient = new GraphQLClient(url, {
        headers: {
            "Authorization" : `Bearer ${process.env.GRAPH_CMS_TOKEN}`
        }
    })
    const pageSlug = pageContext.query.slug

    const query = gql`
    query($pageSlug: String!) {
      video(where: {
        slug: $pageSlug
      }) {
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

    const variables = {
        pageSlug,
    }

    const data = await graphQLClient.request(query, variables)
    const video = data.video

    return {
        props: {
            video
        }
    }
}

const changeToSeen = async (slug) => {
    await fetch('/api/changeToSeen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ slug })
    })
}

const Video = ({ video }) => {
    const [watching, setWatching] = useState(false)

    return (
        <>
            <div className="relative">
                <img className="w-full h-full object-cover" src={video.thumbnail.url} alt={video.title} />
                {!watching && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 py-6 px-4">
                    <div className="text-white text-center">
                        <p className="mb-2">{video.tags.join(', ')}</p>
                        <p className="mb-2">{video.description}</p>
                        <div className="mb-2">
                            <a href="/" className="text-gray-300 underline">Go back</a>
                        </div>
                        <button
                        className="video-overlay bg-gray-100 text-gray-900 py-2 px-4 rounded"
                        onClick={() => {
                            changeToSeen(video.slug);
                            setWatching(!watching);
                        }}
                        >
                        PLAY
                        </button>
                    </div>
                    </div>
                )}
                {watching && (
                    <div className="absolute top-0 left-0 right-0 bottom-0">
                    <ReactPlayer
                      url={video.mp4.url}
                      width="100%"
                      height="100%"
                      controls={true}
                      playing={true}
                    />
                  </div>
                )}
            </div>

        </>
    )
}

export default Video
