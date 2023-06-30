

export default function Name(props) {
 
  return (
    <div className="name-container">
      <input
        type="text"
        className="name"
        placeholder="Name"
        name="name"
        value={props.name}
        onChange={props.changeName}
      />
      
    </div>
    
  );
}
