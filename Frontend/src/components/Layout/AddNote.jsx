/* eslint-disable react/prop-types */

export default function AddNote({onAddNote}) {
  return (
    <button style={{alignSelf:"center"}} onClick={onAddNote}>Add note</button>
  )
}
