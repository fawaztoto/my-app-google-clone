import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import UseGoogleSearch from "./UseGoogleSearch";
import Response from "./Response";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  const { data } = UseGoogleSearch(term);


  //mock API  CALL//
 /* const data = Response;*/
  // console.log(data);

  return (
    <div className="searchPage">
      <div className="SearchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://cdn.mos.cms.futurecdn.net/rjqJEKv6P9Yjy9d3KMGvp8.jpg"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search HideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>

              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">shopping</Link>
              </div>

              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>

              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>

              <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                  <Link to="/settings">Settings</Link>
                </div>

                <div className="searchPage__option">
                  <Link to="/tools">Tools</Link>
                </div>
              </div>
            </div>

           
          </div>
          
        </div>
        
      </div>
      {term && (
              <div className="searchPage__results">
                <p className="searchPage__resultCount">
                  About {data?.searchInformation.formattedTotalResults}
                  results ({data?.searchInformation.formattedSearchTime}
                  seconds) for {term }
                </p>

              {data?.items.map(item=> (
                <div className="searchPage__result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&  item.pagemap?.cse_image[0]?.src && (
                    <img  className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                  )}

                 {item.displayLink}
                </a>

                <a className="searchPage__resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__ResultSnippet">
                  {item.snippet}

                </p>
              </div>
              
              ))}


              </div>
            )}
    </div>
  );
}

export default SearchPage;
