import { Map, OrderedMap, List } from 'immutable';
import uuidV1 from 'uuid/v1';

import * as actionTypes from '../constants/actionTypes';
import { Project } from '../constants/recordTypes';
import reducer from './epicReducer';


jest.mock("uuid/v1", () => jest.fn(() => '5'));

describe("Reducers::epicReducer", function () {
  function getEpic() {
    return Map({"stages": OrderedMap({
      "1": Map({
        id: "1",
        title: "To do",
        projects: List([
          new Project({id: "1", title: "Uranus"}),
          new Project({id: "2", title: "Neptune"}),
          new Project({id: "3", title: "Pluto"}),
          new Project({id: "4", title: "Proxima b"})
        ])
      }),
      "2": Map({
        id: "2",
        title: "In Progress",
        projects: List([
          new Project({id: "5", title: "Mars"})
        ])
      }),
      "3": Map({
        id: "3",
        title: "Done",
        projects: List()
      })
    })});
  };

  it("should handle ADD_PROJECT", function () {
    let action = {type: actionTypes.ADD_PROJECT, payload: {title: "build a house"}};

    expect(reducer(getEpic(), action)).toEqual(Map({"stages": OrderedMap({
      "1": Map({
        id: "1",
        title: "To do",
        projects: List([
          new Project({id: "1", title: "Uranus"}),
          new Project({id: "2", title: "Neptune"}),
          new Project({id: "3", title: "Pluto"}),
          new Project({id: "4", title: "Proxima b"}),
          new Project({id: "5", title: "build a house"})
        ])
      }),
      "2": Map({
        id: "2",
        title: "In Progress",
        projects: List([
          new Project({id: "5", title: "Mars"})
        ])
      }),
      "3": Map({
        id: "3",
        title: "Done",
        projects: List()
      })
    })}));
    expect(uuidV1).toBeCalledWith();
  });

  it("should handle MOVE_PROJECT - same stage", function () {
    let action = {type: actionTypes.MOVE_PROJECT, payload: {
      sourceStageId: '1',
      targetStageId: '1',
      projectId: '2',
      startBeforeProjectId: '4'
    }};

    expect(reducer(getEpic(), action)).toEqual(Map({"stages": OrderedMap({
      "1": Map({
        id: "1",
        title: "To do",
        projects: List([
          new Project({id: "1", title: "Uranus"}),
          new Project({id: "3", title: "Pluto"}),
          new Project({id: "2", title: "Neptune"}),
          new Project({id: "4", title: "Proxima b"}),
        ])
      }),
      "2": Map({
        id: "2",
        title: "In Progress",
        projects: List([
          new Project({id: "5", title: "Mars"})
        ])
      }),
      "3": Map({
        id: "3",
        title: "Done",
        projects: List()
      })
    })}));
  });

  it("should handle MOVE_PROJECT - same stage last", function () {
    let action = {type: actionTypes.MOVE_PROJECT, payload: {
      sourceStageId: '1',
      targetStageId: '1',
      projectId: '2',
      startBeforeProjectId: null
    }};

    expect(reducer(getEpic(), action)).toEqual(Map({"stages": OrderedMap({
      "1": Map({
        id: "1",
        title: "To do",
        projects: List([
          new Project({id: "1", title: "Uranus"}),
          new Project({id: "3", title: "Pluto"}),
          new Project({id: "4", title: "Proxima b"}),
          new Project({id: "2", title: "Neptune"}),
        ])
      }),
      "2": Map({
        id: "2",
        title: "In Progress",
        projects: List([
          new Project({id: "5", title: "Mars"})
        ])
      }),
      "3": Map({
        id: "3",
        title: "Done",
        projects: List()
      })
    })}));
  });

  it("should handle MOVE_PROJECT - to different stage", function () {
    let action = {type: actionTypes.MOVE_PROJECT, payload: {
      sourceStageId: '1',
      targetStageId: '2',
      projectId: '2',
      startBeforeProjectId: '5'
    }};

    expect(reducer(getEpic(), action)).toEqual(Map({"stages": OrderedMap({
      "1": Map({
        id: "1",
        title: "To do",
        projects: List([
          new Project({id: "1", title: "Uranus"}),
          new Project({id: "3", title: "Pluto"}),
          new Project({id: "4", title: "Proxima b"}),
        ])
      }),
      "2": Map({
        id: "2",
        title: "In Progress",
        projects: List([
          new Project({id: "2", title: "Neptune"}),
          new Project({id: "5", title: "Mars"})
        ])
      }),
      "3": Map({
        id: "3",
        title: "Done",
        projects: List()
      })
    })}));
  });
});
