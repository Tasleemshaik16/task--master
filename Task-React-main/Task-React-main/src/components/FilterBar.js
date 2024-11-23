import React from "react";
import "./FilterBar.css";

function FilterBar({ statusFilter, setStatusFilter }) {
    return ( <
        div className = "filter-bar" >
        <
        label htmlFor = "status-filter" > Filter by Status: < /label> <
        select id = "status-filter"
        value = { statusFilter }
        onChange = {
            (e) => setStatusFilter(e.target.value) } >
        <
        option value = "All" > All < /option> <
        option value = "Pending" > Pending < /option> <
        option value = "In Progress" > In Progress < /option> <
        option value = "Completed" > Completed < /option> <
        /select> <
        /div>
    );
}

export default FilterBar;