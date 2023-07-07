import logo from '../public/logo.png'
import { useState } from 'react';

const NavBar = ({ account, videos }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState([]);

  const handleSearchQueryChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = videos.filter((video) => {
      const title = video.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });

    setFilteredVideos(filtered);
  };

  return (
    <div className="navbar flex items-center justify-between bg-gray-900 text-white">
        <div className="logo-wrapper mb-3 mt-3">
            <a href="/">
            <img src={logo} alt="Disney Logo" width={90} height={50} />
            </a>
        </div>

        <div className="search-genre relative">
            <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="px-4 py-2 mr-2 w-full bg-gray-800 text-white focus:outline-none rounded-none border-none"
            />

            {searchQuery && (
            <ul className="search-results px-4 mr-2 absolute left-0 mt-2 bg-gray-900 text-white py-2 rounded shadow w-full">
                {filteredVideos.map((video) => (
                    <a href={`/video/${video.slug}`} key={video.id}>
                    <li className="hover:bg-gray-800 cursor-pointer py-1 px-2 rounded" >
                        {video.title}
                    </li>
                    </a>
                ))}
            </ul>
            )}
        </div>

        <div className="account-info flex items-center">
            <p className="mr-2">Welcome {account.username}</p>
            <img className="avatar w-8 h-8 rounded-full" src={account.avatar.url} alt="Avatar" />
        </div>
    </div>
  );
};

export default NavBar;
