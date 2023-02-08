const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MVXIkzjpFxBu0g7Zagmf/comments?item_id=';

const getComments = async (idMeal) => {
  let comments = [];  
  const response = await fetch(url+idMeal);
  if(response.status >= 400 && response.status < 600){
    return false;    
  }else{
    comments = await response.json();
    return comments;
  }   
};

export default getComments;