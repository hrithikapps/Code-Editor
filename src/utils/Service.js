import { languageCodeMap } from "./Constants";

export async function getSubmission(tokenId, callback) {
  const url = `https://judge0-ce.p.rapidapi.com/submissions/${tokenId}?base64_encoded=true&fields=*`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "929414e5a7msh4b8f26656a05b80p1559dfjsn7756bdd8cac5",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    callback({
      apiStatus: "error",
      message: JSON.stringify(error),
    });
  }
}

export async function makeSubmission({ code, language, stdin, callback }) {
  const url =
    "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "929414e5a7msh4b8f26656a05b80p1559dfjsn7756bdd8cac5",
      "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
    },
    body: JSON.stringify({
      language_id: languageCodeMap[language],
      source_code: btoa(code),
      stdin: btoa(stdin),
    }),
  };

  try {
    callback({ apiStatus: "loading" });
    const response = await fetch(url, options);
    const result = await response.json();
    const tokenId = result.token;
    let statusCode = 1;
    let apiSubmissionResult;
    while (statusCode === 1 || statusCode === 2) {
      try {
        apiSubmissionResult = await getSubmission(tokenId);
        statusCode = apiSubmissionResult.status.id;
      } catch (error) {
        callback({
          apiStatus: "error",
          message: JSON.stringify(error),
        });
        return;
      }
    }

    if (apiSubmissionResult) {
      callback({
        apiStatus: "success",
        data: apiSubmissionResult,
      });
    }
  } catch (error) {
    callback({
      apiStatus: "error",
      message: JSON.stringify(error),
    });
  }
}
