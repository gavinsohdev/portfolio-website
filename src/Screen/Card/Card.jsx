import React from "react";
import { TypeAnimation } from 'react-type-animation';

function Card(props) {
  const { item } = props;

  return (
    <div className="bg-white dark:bg-gray-900  rounded-2xl dark:shadow-white dark:shadow  shadow-xl px-8 py-12 sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4">
        <h3 className="text-2xl font-semibold text-gradient">{item?.title}</h3>
        <p className="mb-6 font-mono">
          {/* {item?.text} */}
          <TypeAnimation
            sequence={[
              item?.text
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.4em', display: 'inline-block' }}
          />
        </p>
      </div>
      <img
        src={item?.image}
        className="w-2/3 mx-auto -mb-4"
        alt="illustration"
        loading="lazy"
        width="900"
        height="400"
      />
    </div>
  );
}

export default Card;
