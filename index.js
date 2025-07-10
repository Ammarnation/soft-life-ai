
  const CLIENT_ID = "391449335148-eo7n8evcdeceeehj54bm85iqfo3ck458.apps.googleusercontent.com";

  document.querySelector(".google-btn").addEventListener("click", () => {
     alert("Google login clicked!");
    google.accounts.id.initialize({
      client_id: CLIENT_ID,
      callback: handleCredentialResponse
    });

    google.accounts.id.prompt();  // Shows account chooser
  });

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
     localStorage.setItem("id_token", response.credential);

    // TODO: send the `response.credential` token to your backend
    // to verify & create/login the user
      window.location.href = "https://www.chatbase.co/chatbot-iframe/DfG5GXK_KbtRRHrM5LgL5";  // or full URL
  }
