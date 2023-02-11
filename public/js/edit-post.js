const editFormHandler = async function (event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;


    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}

const deleteClickHandler = async function () {
  
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
  
    await fetch(`/api/post/${id}`, {
        method: 'DELETE',

    body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
      
}

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', editFormHandler);
document
    .querySelector('#delete-btn')
    .addEventListener('click', deleteClickHandler);


//     Ok so this error- is the postId that is defined at the top (which it looks like you are no longer using) I would get rid of that top line and don't forget to replace that variable postId with the id you are actually using from line 10 that you are grabbing from the window
// That will go into the put route instead of /postId
// **Also - check to make sure your route matches up exactly - hint (/post vs /posts) for the api route you are trying to hit
// Also double check how you are grabbing your text values --> and if you get errors from those make sure to check that the id/input form matches on the edit-post handlebars page

// So to summarize
// 1. Delete postID and replace it in route
// 2. Check route to make sure correct
// 3. Check values are getting grabbed (could add console log to check they are showing up in browser terminal)  *input vs text are*a
// white_check_mark
// eyes
// raised_hands





// 9:10
// But all work should be done within the edit-post.js page to get this guy working! You are closer than you think!