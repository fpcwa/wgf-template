$(function() {
    /* SEARCH BOX 
    On submit determine if FPC or WA Govt being searched.  
    If WA Govt, send search query to WA Govt website (base url within form drop box)
    Otherwise, Search FPC	*/
    $("#src_gov").css("display", "inline");
    $("#search-form").submit(function() {
        // Search is for Government site
        govURL = $("#src_gov").val();
        govSearch = govURL + $("#terms").val();  // Add search terms to government search url
        document.location.href = govSearch;
        return false;
    });
});