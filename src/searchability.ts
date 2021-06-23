export enum SearchType {
  endsWith,
  includes,
  startsWith
}

export interface Searchable {
  string: string;
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
      case SearchType.endsWith:
        retVal = searchString.endsWith(searchable.string, position);
        break;
      case SearchType.includes:
        retVal = searchString.includes(searchable.string, position);
        break;
      case SearchType.startsWith:
        retVal = searchString.startsWith(searchable.string, position);
        break;
      default:
        // default to an equality check
        retVal = searchable.string === searchString;
        break;
    }
  }
  return retVal;
};
