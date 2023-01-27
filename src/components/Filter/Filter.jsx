// import { Component } from "react";
// import PropTypes from "prop-types"

// import styles from "./my-filter-phone.module.css"

// class MyFilterPhone extends Component  {
  
//   render() {
//   return (
    
//     <div className={styles.formGrup}>
//                 <label>Find contacts by name</label>
//       <input
//         value={this.props.filter}
//                 onChange={this.handleFilter}
//                 placeholder="filter"
//                 type="text"
//                 name="filter"
//                 pattern=""
//                 title=""
//                 required/>
//       </div>
    
//     )
// }
  
// }

// export default MyFilterPhone;

// MyFilterPhone.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   filter: PropTypes.string
// }


// import PropTypes from "prop-types"

// import styles from "./my-filter-phone.module.css"

// const MyFilterPhone = ({handleChange}) => {
//   return (
//     <>
//     <div className={styles.formGrup}>
//                 <label htmlFor="filter">Find contacts by name</label>
//         <input
          
//                 onChange={handleChange}
//                 placeholder="filter"
//                 type=""
//                 name="filter"
//                 pattern=""
//                 title=""
                
//         />
//       </div>
//     </>
//     )
// }

// export default MyFilterPhone;

// MyFilterPhone.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   filter: PropTypes.string
// }

// ------------------------

import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
  updateFilter = event => {
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <div className={css.searchWrapper}>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          onChange={this.updateFilter}
          value={this.props.filter}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;