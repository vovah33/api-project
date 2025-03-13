const API_URL = "/api/auth";


export const register = async (userData) => {
  const response = await fetch(API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials" : "true"
    },
    credentials: "include", // ВАЖЛИВО для аутентифікації!
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw { response: { status: response.status, data: errorData } };
  }

  return response.json();
};


export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });

  return response.json();
};

export const checkAuth = async () => {
  const response = await fetch(`${API_URL}/check-auth`, {
    method: "GET",
    credentials: "include",
  });

  return response.json();
};
