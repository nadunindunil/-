import firebase from '../../firebase';

export const ACTION_SAMPLE = 'ACTION_SAMPLE';
export const START_FETCHING_THOUGHTS = 'START_FETCHING_THOUGHTS';
export const START_POSTING_THOUGHTS = 'START_POSTING_THOUGHTS';
export const ADD_THOUGHTS = 'ADD_THOUGHTS';
export const FINISH_FETCHING_THOUGHTS = 'FINISH_FETCHING_THOUGHTS';
export const FINISH_POSTING_THOUGHTS = 'FINISH_POSTING_THOUGHTS';

export function addThoughtsList(thoughts) {
  return {
    type: 'ADD_THOUGHTS',
    thoughts: thoughts
  };
}

export const startFetchingThoughts = () => ({
  type: 'START_FETCHING_THOUGHTS'
});

export const finishFetchingThoughts = () => ({
  type: 'FINISH_FETCHING_THOUGHTS'
});

export const startPostingThoughts = () => ({
  type: 'START_POSTING_THOUGHTS'
});

export const finishPostingThoughts = () => ({
  type: 'FINISH_POSTING_THOUGHTS'
});

export function fetchThoughts() {
  return function(dispatch) {
    dispatch(startFetchingThoughts());

    firebase
      .database()
      .ref('thoughts')
      .orderByKey()
      .limitToLast(20)
      .on('value', snapshot => {
        console.log(snapshot.val());
        // gets around Redux panicking about actions in reducers
        setTimeout(() => {
          const thoughts = snapshotToArray(snapshot) || [];

          dispatch(addThoughtsList(thoughts));
          dispatch(finishFetchingThoughts());
        }, 0);
      });
  };
}

export function postThought(thought) {
  return function(dispatch) {
    dispatch(startPostingThoughts());

    let Tht = {
      data: thought
    };
    const newThtRef = firebase
      .database()
      .ref('thoughts')
      .push();
    Tht.id = newThtRef.key;
    newThtRef.set(Tht).then(success => {
      dispatch(finishPostingThoughts());
    });
  };
}

const snapshotToArray = function(snapshot) {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
