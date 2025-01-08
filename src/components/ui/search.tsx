"use client";

import React from 'react'
import { PlaceholdersAndVanishInput } from '../placeholders-and-vanish-input';

type Props = {}

const Search = (props: Props) => {
    const placeholders = [
        "Search for Integrations...",
        "Search for Automations...",
        "Search for Support...",
        "Search for Settings...",
      ];

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };
      const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
      };

  return (
        <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
      />
  )
}

export default Search