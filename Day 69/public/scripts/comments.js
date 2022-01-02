const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
    const commentListElement = document.createElement("ol");

    for (const comment of comments) {
        const commentElement = document.createElement("li");
        commentElement.innerHTML = `
        <article class="comment-item">
            <h2>${comment.title}</h2>
            <p>${comment.text}</p>
        </article>
        `;
        commentListElement.appendChild(commentElement);
    }

    return commentListElement;
}

async function fetchCommentsPost() {
    // Get Post Id from Button's data attribute
    const postId = loadCommentsBtnElement.dataset.postid;

    // Handling Request Not Sent Error
    try {
        // Fetch comments
        const response = await fetch(`/posts/${postId}/comments`);

        // Handle no/bad response
        if (!response.ok) {
            alert("Fetching Comments failed!");
            return;
        }

        const responseData = await response.json();

        // Render list if comments exists
        if (responseData && responseData.length > 0) {
            // Send back comments
            const commentsListElement = createCommentsList(responseData);
            commentsSectionElement.innerHTML = "";
            commentsSectionElement.appendChild(commentsListElement);
        } else {
            commentsSectionElement.firstElementChild.textContent =
                "We could not find any comment. Maybe add one?";
        }
    } catch (error) {
        alert("Getting comments failed!");
    }
}

async function saveComment(event) {
    // Prevent browser default submission
    event.preventDefault();

    // Get values from the form
    const enteredTitle = commentTitleElement.value;
    const enteredText = commentTextElement.value;

    // Create comment Object
    const comment = {
        title: enteredTitle,
        text: enteredText,
    };

    // Get Post Id from form's data attribute
    const postId = commentsFormElement.dataset.postid;

    try {
        // Send Comment to the backend
        const response = await fetch(`/posts/${postId}/comments`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(comment),
        });

        // Error Handling
        if (response.ok) {
            // Fetch Updated comments and display them
            fetchCommentsPost();

            // Clear form inputs
            commentTitleElement.value = "";
            commentTextElement.value = "";
        } else {
            alert("Could not send comment!");
        }
    } catch (error) {
        alert("Could not send the request - maybe try again later!");
    }
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsPost);
commentsFormElement.addEventListener("submit", saveComment);
