var Lollib = require('./lib/main.js');
var async = require('async');

var lol = new Lollib({
	secure: true,
	host: 'api.riotgames.com',
	path: '/lol/',
	key: 'ddad33ef-e7a4-4d99-8af8-aa8bf5260db0', // TEST API KEY -> Better get your own cause if not rate limit will be exceeded all time
	debug: true
});

/*lol.getSummonerByName('euw', 'NSZombie', function (err, res){
	console.log(err, res);
});
*/

lol.getChallengerLeagueByGametype('euw', 'RANKED_SOLO_5x5', function (err, res){

	console.log('Err:' + err, 'Players in Challenger queue: ' + res.entries.length);

});

lol.getChampions('euw', true, function (err, res) {

	async.map(res.champions, function (champion, callback){

		callback(null, champion.id)

	}, function (err, champions){

		console.log('Err:' + err,  'Free champions:' + champions.join(', '));

	});

});
