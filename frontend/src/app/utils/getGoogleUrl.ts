function getGoogleOauthURL() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    // eslint-disable-next-line
    redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL as string,
    // eslint-disable-next-line
    client_id: process.env.GOOGLE_CLIENT_ID as string,
    // eslint-disable-next-line
    access_type: 'offline',
    // eslint-disable-next-line
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  console.log({ options });
  const qs = new URLSearchParams(options).toString();
  console.log(qs.toString());
  return `${rootUrl}?${qs}`;
}

export default getGoogleOauthURL;
