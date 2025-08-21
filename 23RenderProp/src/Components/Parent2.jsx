    import React from 'react'
    import Child from './Child'
    function Parent2() {
        return (
            <div>
               <Child
        render={(user) => {
          // handle null or undefined before accessing user.users
          if (!user || !user.users) {
            return <p>Loading...</p>;
          }

          return user.users.map((item) => (
            <h4 key={item.id}>
              {item.firstName} {item.lastName}
            </h4>
          ));
        }}
      />
      {/* <Child
        render ={(user)=>{
             if (!user || !user.users) {
            return <p>Loading...</p>;
          }
          return user.users.map((item)=>(
            <ul>
                <li>{item.maidenName} </li>
                <li>{item.age}</li>
                <li>{item.gender}</li>
                <li>{item.email}</li>
            </ul>
          ))
        }}
      /> */}
            </div>
        )
    }

    export default Parent2