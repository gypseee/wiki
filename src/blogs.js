import React from 'react'

function Blogs(){
  let content = (
    <div class="card">
        <img src="logo192.png" alt="Avatar" style={{width:100+"%"}}/>
        <div class="container">
          <h4><b>XYZ</b></h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
        </div>
      </div>
  )
  let array = []
  for(let i=0;i<8;i++)
    array.push(content)
  return(
    array
  )
}

export default Blogs;
