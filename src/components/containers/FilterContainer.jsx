import {connect} from 'react-redux';
import Filter from '../pure/Filter';
import { setVisibilityFilter } from '../../store/actions/actions'

const mapStateToProps = (state, ownprops) => {
    return {
        active: ownprops.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    return{
        onClick: () => {
            dispatch(setVisibilityFilter(ownprops.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default FilterContainer;