import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Column from './Column';
import Counter from './Counter';

import '../../styles/trello/board.scss';


class Board extends Component {
  render() {
    let { stages } = this.props,
        totalCount = stages.reduce((p, stage) => p + stage.get("projects").size, 0);

    return (
      <div>
        <header className="row">
          <div className="col-lg-5">
            <form>
              <div className="form-group row">
                <label htmlFor="new_project" className="col-lg-3 col-form-label">add project</label>
                <div className="col-lg-6">
                  <input className="form-control" type="text" id="new_project" name="new_project" />
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-2 pull-right">
            <h4>TOTAL</h4>
            <Counter num={totalCount} />
          </div>
        </header>

        <div className="row">
          { stages.valueSeq().map(s => <Column key={s.get("id")} onRef={this.makeDraggable} {...s.toObject()} />) }
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  stages: ImmutablePropTypes.orderedMapOf(
    ImmutablePropTypes.map,
    PropTypes.string
  ).isRequired
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function mapStateToProps(state) {
  return {stages: state.getIn(["epic", "stages"])};
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
