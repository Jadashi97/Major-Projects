import React from "react";


function EditForm({

    //below are destructured to be used in the coming elements
    currentCost,
    setIsEditing,
    onEditInputChange,
    onEditFormSubmit
}){
  return(
    <form onSubmit={onEditFormSubmit}>
        <h2>Edit Cost</h2>
        <label htmlFor="updateCost">Update Cost: </label>
        <input
            name="updateCost"
            type="text"
            placeholder="Update Cost"
            value={currentCost.text}
            onChange={onEditInputChange}
        />
        <button type="submit" onClick={onEditFormSubmit}>
            Update
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  )      
}


export default EditForm;