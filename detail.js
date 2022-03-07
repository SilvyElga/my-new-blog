
let blogs = [];

function addBlog() {
  let project = document.getElementById('input-project').value;
  let startDate = document.getElementById('input-startdate').value;
  let endDate = document.getElementById('input-enddate').value;
  let description = document.getElementById('input-description').value;
  let nodeJs = document.getElementById('input-nodejs').value;
  let reactJs = document.getElementById('input-reactjs').value;
  let nextJs = document.getElementById('input-nextjs').value;
  let typeScript = document.getElementById('input-typescript').value;
  let image = document.getElementById('input-image').files[0];



  image = URL.createObjectURL(image);


  let blog = {
    project: project,
    startDate: getStartDate(startDate),
    endDate: getEndDate(endDate),
    description: description,
    nodeJs: nodeJs,
    reactJs: reactJs,
    nextJs: nextJs,
    typeScript: typeScript,
    image: image,
    postAt: duration()


    
    
  };
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember'
  ]



  function getStartDate(startDate){
     const date = startDate.getDate()
     const month = startDate.getMonth()
     const year = startDate.getYear()

     return `${date} ${month[monthIndex]} ${year}`
    
  }

  function getEndDate(endDate){
    const date = endDate.getDate()
    const month = endDate.getMonth()
    const year = endDate.getYear()

    return `${date} ${month[monthIndex]} ${year}`
   
 }


blogs.push(blog);

  renderBlog();
}



function renderBlog() {
  // let lengthData = blogs.length

  let blogDetail = document.getElementById('detail')

//   blogContainer.innerHTML = firstBlog();

  // let i = 0
  for (i = 0; i < blogs.length; i++) {
    blogDetail.innerHTML += `  <div class="main-detail" id="detail">
    <h2>${blogs[i].project}</h2>
    <div class="container-detail">
      <div class="left-detail">
        <img src="${blogs[i].image}" alt="" >
      </div>
      <div class="right-detail">
        <h3>Duration</h3>
        <i class="fa-solid fa-calendar-days"> ${blogs[i].startDate} - ${blogs[i].endDate}</i>
        <br /><br />
        <i class="fa-regular fa-clock"> 1 month</i>
        <h3>Technologies</h3>
        <i class="fa-brands fa-node-js" style="font-size: 30px"></i>
        <i class="fa-brands fa-react" style="font-size: 30px"></i>
        <i class="fa-brands fa-java" style="font-size: 30px"></i>
      </div>
    </div>
    <div class="content-detail">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis et ipsa, mollitia quas illum aperiam optio odio incidunt delectus, aspernatur suscipit pariatur quibusdam error facilis! Vitae quo aspernatur modi quisquam!</p>
    </div>
  </div>`
//   }
// }


// function firstBlog() {
//   return `  <div class="item-card">
//   <img src="./asset2/images2.jpg" alt=""/>
//   <div class="content-card">
//     <h3>Dumbways Mobile App-2021</h3>
//     <div class="duration" >durasi 3 bulan</div>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt vero deleniti repudiandae reprehenderit! </p>
//         <div class="checkbox">
//           <i class="fa-brands fa-node-js"></i>
//           <i class="fa-brands fa-react"></i>
//           <i class="fa-brands fa-java"></i>
//         </div>
//         <br>
//         <div class="btn-group">
//           <a href="#" class="btn-edit">edit</a>
//             <a href="#" class="btn-delete">delete</a>
//         </div>
//   </div>
// </div>`
}
}