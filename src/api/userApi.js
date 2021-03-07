const API_ROOT = `https://o6xaaxitq4.execute-api.ap-southeast-2.amazonaws.com/prod`;

// const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const postUserInfo = async (user) => {
  try {
    await fetch(`${API_ROOT}/users/post/`, {
      method: "POST",
      body: JSON.stringify(user),
    }).then((result) => result.json());
  } catch (error) {
    console.log(error);
  }
};

export const postBookmark = async (bookmark) => {
  try {
    await fetch(`${API_ROOT}/users/bookmark/`, {
      method: "POST",
      body: JSON.stringify(bookmark),
    }).then((result) => result.json());
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookmark = async (bookmark) => {
  try {
    await fetch(`${API_ROOT}/users/bookmark/unsave/`, {
      method: "DELETE",
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
      }
    }).then((result) => result.json());
  } catch (error) {
    console.log(error);
  }
};

export const getSavedCards = async (email) => {
  try {
    return await fetch(`${API_ROOT}/users/bookmark/` + email).then((result) =>
      result.json()
    );
  } catch (error) {
    console.log(error);
  }
};
