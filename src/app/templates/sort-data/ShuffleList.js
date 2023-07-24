// import React from 'react';
// import PropTypes from 'prop-types';

// const className = 'list-sort-demo';
// function ShuffleList({list, category}) {

//     const childrenToRender = list.map((item, i) => {
//         const {
//           title,_id
//         } = item;
//         return (
//           <div key={_id} className={`${PropTypes.string ? PropTypes.string : className}-list`}>
//             <div className={`${PropTypes.string ? PropTypes.string : className}-text`}>
//               <h1>{title}</h1>
//             </div>
//           </div>
//         );
//       });
//     return (
//         <>
//         <div className={`${this.props.className}-wrapper`}>
//         <div className={this.props.className}>
//           <ListSort
//             dragClass/>Name="list-drag-selected"
//             appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
//           >
//             {childrenToRender}
//           </ListSort>
//         </div>
//       </div>
//         </>
//     );
// }