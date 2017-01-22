import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../../../../components/Card';
import Spinner from '../../../../components/Spinner';
import BackgroundText from '../../../../components/BackgroundText';
import './CharactersList.css';

class CharactersList extends Component {
  constructor(props) {
    super(props);
    this.handlePaginationPageChange = this.handlePaginationPageChange.bind(this);
  }

  state = {
    currentPaginationPage: 0,
  };

  handlePaginationPageChange(pageNum) {
    this.setState({
      currentPaginationPage: (pageNum.selected),
    });
    const offset = pageNum.selected * 50;
    this.props.getCharactersFromAPI(offset);
  }

  render() {
    const { isFetching, characters, paginationParams } = this.props;

    const spinner = (
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-6">
          <Spinner />
        </div>
      </div>
    );

    const characterList = (
      <div>
        <BackgroundText text="Characters" />
        <div className="row">
          {
            characters.map((character) => {
              return (
                <div key={character.id} className="col-xs-12 col-sm-6 col-md-2">
                  <Card
                    title={character.name} linkTo={`/characters/${character.id}`}
                    image={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`}
                  />
                </div>
              );
            })
          }
        </div>
        <div className="row">
          <div className="col-xs-12">
            <nav className="pagination">
              <ReactPaginate
                pageCount={paginationParams.totalPages}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                containerClassName="pagination-list"
                pageClassName=""
                pageLinkClassName="pagination-link"
                activeClassName="pagination-link is-current"
                previousLinkClassName="pagination-previous"
                nextLinkClassName="pagination-next"
                onPageChange={this.handlePaginationPageChange}
                forcePage={this.state.currentPaginationPage}
              />
            </nav>
          </div>
        </div>
      </div>
    );

    return (

      isFetching ?
        spinner
        :
        characterList
    );
  }
}


CharactersList.propTypes = {
  isFetching: React.PropTypes.bool,
  characters: React.PropTypes.arrayOf(React.PropTypes.object),
  paginationParams: React.PropTypes.objectOf(React.PropTypes.any),
};

CharactersList.defaultProps = {
  isFetching: false,
  characters: [],
};

export default CharactersList;

