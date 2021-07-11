export declare enum SearchType {
    endsWith = 0,
    includes = 1,
    startsWith = 2
}
export interface Searchable {
    string: string;
    searchType: SearchType;
}
export declare const Search: (searchable: Searchable, searchString: string, position?: number) => boolean;
