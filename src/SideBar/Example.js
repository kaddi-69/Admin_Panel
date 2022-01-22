import React from 'react';

function Example() {
  const [selected,setSelected]= React.useState()

    const data = [
        {
          id: 1,
          src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_24.jpg",
          title: "Nike React Infinity Run Fly",
          prise: "$24.82",
        },
        {
          id: 2,
          src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_23.jpg",
          title: "Nike React Art3mis",
          prise: " $81.16",
        },
        {
          id: 3,
          src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_22.jpg",
          title: "NikeCourt Royale",
          prise: " $13.55",
        },
        {
          id: 4,
          src: "https://minimal-kit-react.vercel.app/static/mock-images/products/product_21.jpg",
          title: "Nike Air Zoom SuperRep",
          prise: "$89.32",
        },
      ];
      
  return <div>
      {data.map((e)=>{
          <div className="ali" key={e.id}>
                <p active={selected === e.id} setSelected={setSelected} >{e.title}</p>
          </div>
      })}
  </div>;
}

export default Example;
