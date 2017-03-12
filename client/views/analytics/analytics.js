/*
 * Call the function to built the chart when the template is rendered
 */
Template.analytics.onRendered(function () {
    //invoke the server method
	if (Meteor.isClient) {
		Meteor.call("semRushRank", function (error, results) {
			var semDataSet = Papa.parse(results.content, {
				header: "true",
				complete: function (results) {
					var semDomain = [];
					var semOrganicKeywords = [];
					var semOrganicTraffic = [];
					var semAdwordsKeywords = [];
					var semAdwordsTraffic = [];
					_.each(results.data, function (csvData) {
						semDomain.push(csvData.Domain);
						semOrganicKeywords.push(csvData[ 'Organic Keywords' ]);
						semOrganicTraffic.push(csvData[ 'Organic Traffic' ]);
						semAdwordsKeywords.push(csvData[ 'Adwords Keywords' ]);
						semAdwordsTraffic.push(csvData[ 'Adwords Traffic' ]);
					});
					builtColumn(semDomain, semOrganicTraffic);
					builtPie();
				},
				skipEmptyLines: true
			});
		});
	};
});