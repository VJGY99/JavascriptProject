import React from "react";
const Spinner = () => {
    return (
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <i className="fas fa-sync fa-spin fa-4x" />
            </div>
            <div className="col"></div>
        </div>
    );
};
export default Spinner;