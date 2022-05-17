import { React, useState, useEffect, useMemo } from "react";
import "./SearchBar.css"
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import ListData from './ListData.json'

function SearchBar({ data={ListData} }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
    const handleFilter = (event) => {
    const searchWord = event.target.value;
          setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
          });
      
          if (searchWord === "") {
            setFilteredData([]);
          } else {
            setFilteredData(newFilter);
          }
        }; 


    const clearInput = () => {
          setFilteredData([]);
          setWordEntered("");
        };
    return (
        <div className="search">
          <div className="searchInputs">
            <input
              placeholder="Search by course or instructor!"
              value={wordEntered}
              onChange={handleFilter}
            />
            <div className="searchIcon">
              {filteredData.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div>
          </div>
          {filteredData.length != 0 && (
            <div className="dataResult">
              {filteredData.slice(0, 15).map((value, key) => {
                return (
                  <a className="dataItem" href={value.link}>
                    <p>{value.title} </p>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      );
    };

export default SearchBar;
