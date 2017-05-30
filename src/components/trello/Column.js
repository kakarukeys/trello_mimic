import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Project } from '../../constants/recordTypes';
import Card from './Card';
import Counter from './Counter';

import '../../styles/trello/column.scss';


class Column extends Component {
  render() {
    let {id, title, projects, onRef} = this.props;

    return (
      <section className="col-lg-4 column">
        <div className="header row">
          <p className="lead col-lg-7">{ title }</p>
          <div className="col-lg-5"><Counter num={projects.size} /></div>
        </div>
        <div id={"column-" + id} className="content" ref={onRef || function() {}}>
          { projects.size ? 
            projects.map(p => <Card key={p.get("id")} {...p.toObject()} />) :
            <p>~ It's empty here ~</p>
          }
        </div>
      </section>
    );
  }
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  projects: ImmutablePropTypes.listOf(
    PropTypes.instanceOf(Project)
  ).isRequired,
  onRef: PropTypes.func
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(null, mapDispatchToProps)(Column);
