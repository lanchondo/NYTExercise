

  	var term = "monkey";
  	var yearStart = "2011";
  	var yearEnd = "2016";
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryUrl += '?' + $.param({
    'api-key': "0bbc898625f846448611e773e1c41c27",
    'q': term,
    'begin_date': yearStart + "0101",//make as a variable from searches
    'end_date': yearEnd + "1231"
    });
    $.ajax({
      url: queryUrl,
      method: 'GET',
    }).done(function(result) {

      console.log(result);
      var ourData = result.response.docs;
      console.log(ourData);
      ourData.forEach(function(article){
      	//goes into well section
      	var articleDiv = $("<div>")
      	$(articleDiv).append("<h2>"+article.headline.main+"</h2>");
      	$(articleDiv).append("<p>"+article.byline.original+"</p>");
      	$(".articles").prepend(articleDiv);
      })





    }).fail(function(err) {
      throw err;
    });

