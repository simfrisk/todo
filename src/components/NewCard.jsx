// import { useState } from "react";
// import { CardStore } from "../store/CardStore";
// import { Card } from "./Card";

// export const NewCard = () => {
//   const [title, setTitle] = useState("")
//   const [description, setDescription] = useState("")
//   const addTodo = CardStore((state) => state.addTodo)

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (title && description) {
//       addTodo({ title, description })
//       setDescription("")
//       setTitle("")
//     }
//   }

//   return (
//     <>
//       <form
//         className="
//           max-w-150 
//           m-auto"
//         onSubmit={handleSubmit}>
//         <fieldset
//           className="
//           primary-text">
//           <label>
//             <p>Title</p>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="
//                 border 
//                 border-darkgray 
//                 dark:border-lightgray 
//                 py-1 
//                 px-3" />
//             <p>Description</p>
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="
//                 border 
//                 border-darkgray 
//                 dark:border-lightgray 
//                 py-1 
//                 px-3"/>
//           </label>
//           <br />
//           <button
//             type="submit"
//             className="
//               primary-text-hover 
//               border 
//               border-darkgray 
//               p-2 my-5 
//               bg-cyan-600"
//           >Submit</button>
//         </fieldset>
//       </form>
//     </>
//   )
// };