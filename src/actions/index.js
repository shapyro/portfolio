export function selectProject(project) {
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  };
}

// export function unselectProjects() {
//   return {
//     type: 'PROJECTS_UNSELECTED',
//     payload: null
//   }
// }
