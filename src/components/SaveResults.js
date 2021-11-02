let searchResults = [];


function SaveResults(props) {

    searchResults = props;
    //console.log("inside function", searchResults['0']);

    return searchResults;

}

export { searchResults, SaveResults };
