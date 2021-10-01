export enum SearchType {
  EndsWith,
  Includes,
  StartsWith
}

export interface Searchable {
  searchTerm: string;
  searchType: SearchType;
}

export const Search = (
  searchable: Searchable,
  searchString: string,
  position?: number
): boolean => {
  var retVal: boolean = false;
  if (typeof searchable !== "undefined") {
    switch (searchable.searchType) {
      case SearchType.EndsWith:
        retVal = searchString.endsWith(searchable.searchTerm, position);
        break;
      case SearchType.Includes:
        retVal = searchString.includes(searchable.searchTerm, position);
        break;
      case SearchType.StartsWith:
        retVal = searchString.startsWith(searchable.searchTerm, position);
        break;
      default:
        // default to an equality check
        retVal = searchable.searchTerm === searchString;
        break;
    }
  }
  return retVal;
};
