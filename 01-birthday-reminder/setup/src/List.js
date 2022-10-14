import React from 'react';

const List = ({people}) => {
  return (
    <>
      <h2>list component</h2>
      {people.map((person)=>{
        const{id,name,age,birthday,image} = person
        return(
          <article key={id} className="person">
           
            <img src={image} />
            <div>
              {name}
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
