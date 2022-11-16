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

  /*const { data } = UseGoogleSearch(term);*/

  const data = Response;
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
              <div className="search__Page_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>

              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>

              <div className="searchpage__option">
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

            <div className="SearchPage__results"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
