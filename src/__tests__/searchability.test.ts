import { Search, Searchable, SearchType } from "../index";

describe("when using search", () => {
  it("should return false if there's no match in endsWith", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.EndsWith
    };
    expect(Search(s, "foo")).toBeFalsy();
  });
  it("should return false if there's no match in endsWith", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.EndsWith
    };
    expect(Search(s, "foo bar")).toBeTruthy();
  });
  it("should return false if there's no match in includes", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.Includes
    };
    expect(Search(s, "foo")).toBeFalsy();
  });
  it("should return false if there's no match in includes", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.Includes
    };
    expect(Search(s, "foo bar far")).toBeTruthy();
  });
  it("should return false if there's no match in startsWith", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.StartsWith
    };
    expect(Search(s, "foo")).toBeFalsy();
  });
  it("should return false if there's no match in startsWith", () => {
    const s: Searchable = {
      searchTerm: "bar",
      searchType: SearchType.StartsWith
    };
    expect(Search(s, "bar foo")).toBeTruthy();
  });
  it("should do strict equality check if the searchType is invalid", () => {
    expect(Search({ searchTerm: "foo", searchType: 4 }, "bar")).toBeFalsy();
  });
  it("should fail strict equality check if the searchType is invalid", () => {
    expect(Search({ searchTerm: "foo", searchType: 4 }, "foo")).toBeTruthy();
  });
  it("should throw an error if a searchable is not passed in", () => {
    expect(Search(undefined, "")).toBeFalsy();
  });
});
