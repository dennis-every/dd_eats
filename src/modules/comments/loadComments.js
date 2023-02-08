import getComments from "./api/getComments.js"

const loadComments = async (idMeals) => {  
  const dates__cntr = document.getElementById('comment__dates');
  const comment__cntr = document.getElementById('comment__comment');
  const comments = await getComments(idMeals);
  let dates = '';
  let prev__comments = '';
  let temp = '';
  if(comments){
    comments.forEach((e)=>{
      dates+=`
        <li>${e.creation_date}</li>
      `
      temp=e.username+': '+e.comment;
      prev__comments+=`
        <li>${temp}</li>
      `
    })
    dates__cntr.innerHTML = dates;
    comment__cntr.innerHTML = prev__comments;
  }else{
    dates__cntr.innerHTML = dates;
    prev__comments = 'There are no comments yet for this meal.'
    comment__cntr.innerHTML = prev__comments;
  }
  
  
}

export default loadComments;