import React from 'react';

const Quotes: React.FC = () => {
  return (
    <section className="quotes">
      <div className="quotes__container">
        <p className="quotes__phrase">
        &quot;Una persona puede marcar la diferencia y todos deberían intentarlo.&quot;
        </p>
        <p className="quotes__author">— John F. Kennedy</p>
      </div>
    </section>
  );
};

export default Quotes;