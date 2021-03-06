# Searchability [![Test](https://github.com/pseudosma/searchability/actions/workflows/push.yml/badge.svg?branch=master)](https://github.com/pseudosma/searchability/actions/workflows/push.yml) [![Coverage Status](https://coveralls.io/repos/github/pseudosma/searchability/badge.svg?branch=master)](https://coveralls.io/github/pseudosma/searchability?branch=master) ![License](https://img.shields.io/npm/l/searchability)

Searchability provides a simple interface, a **Searchable**, to pair a string with some of the built-in search functions - `endsWith`, `includes`, or `startsWith`. 

```typescript
interface Searchable {
  searchTerm: string;
  searchType: SearchType;
};

enum SearchType {
  EndsWith,
  Includes,
  StartsWith
}
```

Users are free to build their own logic to interpret a Searchable, but a dedicated **Search** function is provided that picks the correct search based on the **SearchType** enum.

```typescript
const Search = (searchable: Searchable, searchString: string, position?: number): boolean
```

## Usage

The intended usage of a Searchable is to provide a compact option for any type-based searches, as the following example illustrates:

```typescript
import { Searchable, Search, SearchKey } from "searchability";

type SearchKey = string | Searchable | RegExp;

const searchString: string = "Lorem ipsum";
const k: SearchKey = {searchTerm: "Lorem", searchKey: SearchKey.StartsWith}
```

```typescript
function matchFound(k: SearchKey) => boolean {
  switch (typeof k) {
    case "string":
      return k === searchString;
    case "Searchable"
      return Search(k, searchString);
    case "RegExp"
      return k.exec(searchString);
    }
}
```

## Install with [npm](https://www.npmjs.com/)

```bash
npm i searchability --save
```
This package is provided in the ES2015 module format.

## Contributing

Pull requests are always welcome. For bugs and feature requests, [please create an issue](https://github.com/pseudosma/searchability/issues).

## License

Copyright (c) 2021 David Paige.  
Released under the MIT license.

