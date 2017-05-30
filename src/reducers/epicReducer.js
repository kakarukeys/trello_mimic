import uuidV1 from 'uuid/v1';

import * as actionTypes from '../constants/actionTypes';
import { Project } from '../constants/recordTypes';
import initialState from './initialState';


// this should be a user setting, for now hard-code
const PROJECT_ENTRY_STAGE_ID = "1";

export default function (state = initialState.epic, action) {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      let {title} = action.payload,
          newProject = new Project({id: uuidV1(), title});

      // push to a default entry stage
      return state.updateIn(
        ["stages", PROJECT_ENTRY_STAGE_ID, "projects"],
        projects => projects.push(newProject)
      );

    case actionTypes.MOVE_PROJECT:
      let {sourceStageId, targetStageId, projectId, startBeforeProjectId} = action.payload,
          project;

      // moving out
      return state.updateIn(["stages", sourceStageId, "projects"], projects => {
        let oldIndex = projects.findIndex(p => p.id === projectId);
        project = projects.get(oldIndex);
        return projects.delete(oldIndex);
      })

      // moving in
      .updateIn(["stages", targetStageId, "projects"], projects => {
        if (startBeforeProjectId) {
          let newIndex = projects.findIndex(p => p.id === startBeforeProjectId);
          return projects.insert(newIndex, project);
        } else {
          return projects.push(project);
        }
      });

    default:
      return state;
  }
}
