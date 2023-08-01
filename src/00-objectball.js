
function gameObject() {
    
    
   const teams = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 17
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turqoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'Desagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }

    return teams;
}

console.log(gameObject());

function numPointsScored(name) {
    let obj = gameObject();

    for (players in obj.home.players) {
        if (players === name) {
            let playerPointsScored = obj.home.players[name].points;
            console.log(playerPointsScored);
            return playerPointsScored; 
        }
    }

    for (players in obj.away.players) {
        if (players === name) {
            let playerPointsScored = obj.away.players[name].points;
            console.log(playerPointsScored);
            return playerPointsScored; 
        }
    }
}

function shoeSize(name) {
    let obj = gameObject();

    for (players in obj.home.players) {
        if (players === name) {
            let playerShoe = obj.home.players[name].shoe;
            console.log(playerShoe) 
            return playerShoe;
        }
    }

    for (players in obj.away.players) {
        if (players === name) {
            let playerShoe = obj.away.players[name].shoe
            console.log(playerShoe);
            return playerShoe;
        }
    }
}

function teamColors(name) {
    let obj = gameObject();

    if (obj.home.teamName === name) {
        let teamColorsArray = obj.home.colors;
        console.log(teamColorsArray);
        return teamColorsArray;
    } else if (obj.away.teamName === name) {
        let teamColorsArray = obj.away.colors
        console.log(teamColorsArray);
        return teamColorsArray;
    }

}

function teamNames() {
    let obj = gameObject();
    teamArray = [];
    teamArray.push(obj.home.teamName);
    teamArray.push(obj.away.teamName);

    console.log(teamArray)
    return teamArray;
}

function playerNumbers(team) {
    let obj = gameObject();
    teamNumbersArray = [];

    if (team === obj.home.teamName) {
        for (player in obj.home.players) {
            teamNumbersArray.push(obj.home.players[player].number);
        }
    } else if (team === obj.away.teamName) {
        for (player in obj.away.players) {
            teamNumbersArray.push(obj.away.players[player].number)
        }
    }

    console.log(teamNumbersArray)
    return teamNumbersArray;
}

function playerStats(name) {
    let obj = gameObject();

    for (players in obj.home.players) {
        if (players === name) {
            let playerObj = obj.home.players[name];
            console.log(playerObj) 
            return playerObj;
        }
    }

    for (players in obj.away.players) {
        if (players === name) {
            let playerObj = obj.away.players[name];
            console.log(playerObj) 
            return playerObj; 
        }
    }
}

function bigShoeRebounds() {
    let obj = gameObject();
    let shoeArray = [];

    for (player in obj.home.players) {
        shoeArray.push(obj.home.players[player].shoe);
    }
    for (player in obj.away.players) {
        shoeArray.push(obj.away.players[player].shoe);
    }
    let biggestShoe = Math.max(...shoeArray);
    console.log(biggestShoe)

    for (player in obj.home.players) {
        if (obj.home.players[player].shoe === biggestShoe) {
            let playerBiggestShoeSize = player;
            console.log(playerBiggestShoeSize);
            return playerBiggestShoeSize;
        }
    }
    for (player in obj.away.players) {
        if (obj.away.players[player].shoe === biggestShoe) {
            let playerBiggestShoeSize = player;
            console.log(playerBiggestShoeSize);
            return playerBiggestShoeSize;
        }
    }
}

function mostPointsScored() {
    let obj = gameObject();
    let pointsArray = [];

    for (player in obj.home.players) {
        pointsArray.push(obj.home.players[player].points);
    }
    for (player in obj.away.players) {
        pointsArray.push(obj.away.players[player].points);
    }
    let mostPointsScoredValue = Math.max(...pointsArray);
    console.log(mostPointsScoredValue)

    for (player in obj.home.players) {
        if (obj.home.players[player].points === mostPointsScoredValue) {
            let playerMostPoints = player;
            console.log(playerMostPoints);
            return playerMostPoints;
        }
    }
    for (player in obj.away.players) {
        if (obj.away.players[player].points === mostPointsScoredValue) {
            let playerMostPoints = player;
            console.log(playerMostPoints);
            return playerMostPoints;
        }
    }
}

function winningTeam() {
    let obj = gameObject();
    let homePoints = [];
    let awayPoints = [];
    let totalHomePoints = 0;
    let totalAwayPoints = 0;
    let winner;

    for (player in obj.home.players) {
        homePoints.push(obj.home.players[player].points);
    }
    for (player in obj.away.players) {
        awayPoints.push(obj.away.players[player].points);
    }

    console.log(homePoints)
    console.log(awayPoints)

    for (let i = 0; i < homePoints.length; i++) {
        totalHomePoints += homePoints[i];
    }
    for (let i = 0; i < awayPoints.length; i++) {
        totalAwayPoints += awayPoints[i];
    }

    if (totalHomePoints > totalAwayPoints) {
        winner = obj.home.teamName;
        console.log(winner);
        return winner;
    } else if (totalAwayPoints > totalHomePoints){
        winner = obj.away.teamName;
        console.log(winner)
        return winner;
    }


}

function playerWithLongestName() {
    let obj = gameObject();
    let allPlayers = [];
    let longestName;

    for (player in obj.home.players) {
        allPlayers.push(player);
    }
    for (player in obj.away.players) {
        allPlayers.push(player);
    }

    for (let i = 0; i < allPlayers.length; i+=2) {
        if (allPlayers[i].length > allPlayers[i + 1].length) {
            longestName = allPlayers[i];
        }
        
    }
    console.log(longestName)
    return longestName;
    

}

numPointsScored('Jason Terry')
shoeSize('Mason Plumlee')

teamColors('Charlotte Hornets')

teamNames()

playerNumbers('Charlotte Hornets')

playerStats('Jeff Adrien')

bigShoeRebounds()
mostPointsScored()

winningTeam()

playerWithLongestName();