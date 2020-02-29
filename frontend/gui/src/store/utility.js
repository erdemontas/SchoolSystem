//To update objects properties

export const updateObject = ( oldObject, updatedProperties ) => {
    return {
        ...oldObject, //Create a clone of oldObject
        ...updatedProperties 
    }
}