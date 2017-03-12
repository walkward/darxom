if (Meteor.isServer) {
	Meteor.methods({
		semRushRank: function () {
			this.unblock();
			return Meteor.http.call("GET", "http://api.semrush.com", {
				params: {
					key: "c8f57355574f85fda97bf30237a0864b",
					display_limit: "10",
					type: "rank",
					database: "us"
				}
			});
		}
	});
}