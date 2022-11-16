import React from 'react'
import './SearchPage.css'
import {  useStateValue } from "./StateProvider"
import UseGoogleSearch from './UseGoogleSearch'
import Response from './Response'


function SearchPage() {
const [{term} , dispatch] = useStateValue()


/*const { data } = UseGoogleSearch(term);*/


const data = Response; 
// console.log(data);

  return (
    <div className='searchPage'>
      <div className='SearchPage__header'>
      <Link to ="/">
     <img

     className='searchPage__logo'


      </Link>
      </div>
  
        <div className='SearchPage__results'>


        </div>
    </div>
  )
}

export default SearchPage 