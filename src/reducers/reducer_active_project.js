export default function (state = null, action) {
  switch(action.type) {
  case 'PROJECT_SELECTED':
    return action.payload;
  // case 'PROJECTS_UNSELECTED':
  //   return state = null;
  }
  return state;
}