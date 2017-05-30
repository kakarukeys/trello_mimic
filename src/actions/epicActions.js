import * as actionTypes from '../constants/actionTypes';


export function addProject(title) {
  return {
    type: actionTypes.ADD_PROJECT,
    payload: {title}
  };
}

export function moveProject(projectId, targetStageId, sourceStageId, startBeforeProjectId) {
  return {
    type: actionTypes.MOVE_PROJECT,
    payload: {projectId, targetStageId, sourceStageId, startBeforeProjectId},
  };
}
