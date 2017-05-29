import { Map, OrderedMap, List } from 'immutable';
import { Project } from '../constants/recordTypes';


export default {
  epic: Map({"stages": OrderedMap({
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
        new Project({id: "5", title: "Mars"}),
        new Project({id: "6", title: "Jupiter"}),
        new Project({id: "7", title: "Saturn"}),
      ])
    }),
    "3": Map({
      id: "3",
      title: "Done",
      projects: List([
        new Project({id: "8", title: "Apollo 13"}),
        new Project({id: "9", title: "Apollo 14"}),
        new Project({id: "10", title: "Apollo 15"}),
        new Project({id: "11", title: "Apollo 16"}),
        new Project({id: "12", title: "Apollo 17"}),
      ])
    })
  })}),

  routing: Map({
    locationBeforeTransitions: null
  })
};
