const track = '|_||_|__|__';

const actions = ['Run','Run','Jump','Run','Run','Jump','Run','Run'];

function obstacleRace (actions, track){
    let copyTrack = track.split('');
    let allGood = true;
    let finalTrack = '';

    for(let i = 0; i <= copyTrack.length; i++ ){
        let runnerActions = actions[i];
        let trackD = copyTrack[i];

        if(runnerActions === 'Run' && trackD === '_'){
            finalTrack = finalTrack + trackD;
        }else if(runnerActions === 'Jump' && trackD === '|'){
            finalTrack = finalTrack + trackD;

        }else if(runnerActions === 'Run' && trackD === '|'){
            finalTrack = finalTrack + 'x';
            allGood = false;
        }else if(runnerActions === 'Jump' && trackD === '_'){
            finalTrack = finalTrack + '/';
            allGood = false;
        }
        
    }
        console.log(finalTrack);

    return allGood;
}
obstacleRace(actions, track);