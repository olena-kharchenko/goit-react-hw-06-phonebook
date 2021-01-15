import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as phonebookActions from '../../redux/phonebook-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name to search"
        className={s.input}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
