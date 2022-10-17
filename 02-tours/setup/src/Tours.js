import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return (
    <section>
  <h2>tours component</h2>
  <div>
  {tours.map((tour)=>{
    const {id} = tour
    return(
      <Tour key={id} {...tour} removeTour={removeTour}/>
    )

  })}
  </div>

  </section>);
};

export default Tours;
