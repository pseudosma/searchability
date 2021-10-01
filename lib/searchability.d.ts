export declare enum SearchType {
    EndsWith = 0,
    Includes = 1,
    StartsWith = 2
}
export interface Searchable {
    searchTerm: string;
    searchType: SearchType;
}
export declare const Search: (searchable: Searchable, searchString: string, position?: number) => boolean;
