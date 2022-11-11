

type allnames = {
    AllName: string[];
  };
  
  const Namelist = (props: allnames) => {
      console
    return (
      <div>
        {
        props.AllName.map((item) => {
         return item !== "" ? <h2>{item}</h2> : "try again";
        })
        }
      </div>
    );
  };
  
  export default Namelist;
  