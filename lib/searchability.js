"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = exports.SearchType = void 0;
var SearchType;
(function (SearchType) {
    SearchType[SearchType["endsWith"] = 0] = "endsWith";
    SearchType[SearchType["includes"] = 1] = "includes";
    SearchType[SearchType["startsWith"] = 2] = "startsWith";
})(SearchType = exports.SearchType || (exports.SearchType = {}));
const Search = (searchable, searchString, position) => {
    var retVal = false;
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
exports.Search = Search;
