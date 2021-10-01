"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = exports.SearchType = void 0;
var SearchType;
(function (SearchType) {
    SearchType[SearchType["EndsWith"] = 0] = "EndsWith";
    SearchType[SearchType["Includes"] = 1] = "Includes";
    SearchType[SearchType["StartsWith"] = 2] = "StartsWith";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
const Search = (searchable, searchString, position) => {
    var retVal = false;
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
exports.Search = Search;
