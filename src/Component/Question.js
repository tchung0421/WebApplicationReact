import { useState } from "react";
import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


export const Question = (props) => {
  const [items, setItems] = useState(props.items);

  return (
    <>
      <section id="questions" className="p-5">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <Accordion>
            {
              items.map((item, index) => {
                console.log(item, "index" + index);
                return <><Accordion.Item eventKey={index}>

                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>
                    {item.body}
                    <div>
                      <Button id={item.header} onClick={props.itemEvent}>Click Me</Button>
                    </div>
                  </Accordion.Body>
                        </Accordion.Item></>
              })
            }
          </Accordion>
        </div>
      </section>
    </>
  )
}



// old code Accordian
// export const Question = (props) => {

//   const [question, setQuestion] = useState(false);

//   if (question) {
//     setQuestion(true);
//   }

//   return (
//     <>
//       <section id="questions" className="p-5">
//         <div className="container">
//           <h2 className="text-center mb-4">Frequently Asked Questions</h2>
//           <div className="accordion accordion-flush" id="questions">
//             {/* Item 1 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#question-one"
//                 >
//                   Where exactly are you located?
//                 </button>
//               </h2>
//               <div
//                 id="question-one"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#questions"
//               >
//                 <div className="accordion-body">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Numquam beatae fuga animi distinctio perspiciatis adipisci
//                   velit maiores totam tempora accusamus modi explicabo
//                   accusantium consequatur, praesentium rem quisquam molestias at
//                   quos vero. Officiis ad velit doloremque at. Dignissimos
//                   praesentium necessitatibus natus corrupti cum consequatur
//                   aliquam! Minima molestias iure quam distinctio velit.
//                 </div>
//               </div>
//             </div>
//             {/* Item 2 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#question-two"
//                 >
//                   How much does it cost to attend?
//                 </button>
//               </h2>
//               <div
//                 id="question-two"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#questions"
//               >
//                 <div className="accordion-body">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Numquam beatae fuga animi distinctio perspiciatis adipisci
//                   velit maiores totam tempora accusamus modi explicabo
//                   accusantium consequatur, praesentium rem quisquam molestias at
//                   quos vero. Officiis ad velit doloremque at. Dignissimos
//                   praesentium necessitatibus natus corrupti cum consequatur
//                   aliquam! Minima molestias iure quam distinctio velit.
//                 </div>
//               </div>
//             </div>
//             {/* Item 3 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#question-three"
//                 >
//                   What do I need to Know?
//                 </button>
//               </h2>
//               <div
//                 id="question-three"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#questions"
//               >
//                 <div className="accordion-body">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Numquam beatae fuga animi distinctio perspiciatis adipisci
//                   velit maiores totam tempora accusamus modi explicabo
//                   accusantium consequatur, praesentium rem quisquam molestias at
//                   quos vero. Officiis ad velit doloremque at. Dignissimos
//                   praesentium necessitatibus natus corrupti cum consequatur
//                   aliquam! Minima molestias iure quam distinctio velit.
//                 </div>
//               </div>
//             </div>
//             {/* Item 4 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#question-four"
//                 >
//                   How Do I sign up?
//                 </button>
//               </h2>
//               <div
//                 id="question-four"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#questions"
//               >
//                 <div className="accordion-body">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Numquam beatae fuga animi distinctio perspiciatis adipisci
//                   velit maiores totam tempora accusamus modi explicabo
//                   accusantium consequatur, praesentium rem quisquam molestias at
//                   quos vero. Officiis ad velit doloremque at. Dignissimos
//                   praesentium necessitatibus natus corrupti cum consequatur
//                   aliquam! Minima molestias iure quam distinctio velit.
//                 </div>
//               </div>
//             </div>
//             {/* Item 5 */}
//             <div className="accordion-item">
//               <h2 className="accordion-header">
//                 <button
//                   className="accordion-button collapsed"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#question-five"
//                 >
//                   Do you help me find a job?
//                 </button>
//               </h2>
//               <div
//                 id="question-five"
//                 className="accordion-collapse collapse"
//                 data-bs-parent="#questions"
//               >
//                 <div className="accordion-body">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Numquam beatae fuga animi distinctio perspiciatis adipisci
//                   velit maiores totam tempora accusamus modi explicabo
//                   accusantium consequatur, praesentium rem quisquam molestias at
//                   quos vero. Officiis ad velit doloremque at. Dignissimos
//                   praesentium necessitatibus natus corrupti cum consequatur
//                   aliquam! Minima molestias iure quam distinctio velit.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
