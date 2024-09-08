"use client";

import {
  clearSearchResults,
  searchRealtime,
} from "@/app/store/com/realtimeSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchDropdown() {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.realtime.searchResults);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      dispatch(searchRealtime(value));
    } else {
      dispatch(clearSearchResults());
    }
  };

  const handleClear = () => {
    setQuery("");
    dispatch(clearSearchResults());
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="ค้นหา..."
        style={{ padding: "8px", width: "300px" }}
      />
      {query && (
        <button onClick={handleClear} style={{ marginLeft: "8px" }}>
          ล้าง
        </button>
      )}
      {searchResults.length > 0 && (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            backgroundColor: "white",
            width: "300px",
            position: "absolute",
            zIndex: 10,
          }}
        >
          {searchResults.map((item) => (
            <div
              key={item.id}
              style={{ padding: "8px", borderBottom: "1px solid #eee" }}
            >
              <a
                href={item.url}
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>{item.username}</strong>: {item.text}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
