import jwt_decode from 'jwt-decode';

export const getCurrentUser = (): { id: string, roles: string[] } | null => {
  const token = localStorage.getItem('token');
  console.log("token:", token)

  if (!token) {
    console.log('No token found in localStorage')
    return null;
  }

  try {
    const decodedToken = jwt_decode<{ userId: string, roles: string[] }>(token);
    // return decodedToken;
    // return { id: decodedToken.id, roles: decodedToken.roles };
    console.log('Decoded token:', decodedToken)
    const { userId, roles } = decodedToken
    return { id: userId, roles }
  } catch (error) {
    console.error('Error decoding token', error);
    return null;
  }
};
