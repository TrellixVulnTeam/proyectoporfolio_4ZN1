


export const getAllUsersSQL = 
`SELECT id, name FROM users WHERE name=? AND password=?`;

export const postUsersSQL = 
`INSERT INTO users ( users_id, name, password ) VALUES (?, ?, ?)`;

export const putUsersSQl = 
`UPDATE users SET users_id, = ?, password = ?  WHERE name = ? AND user_id = ?`;

export const deleteUsersSQL = 
`DELETE FROM Fotos WHERE name = ? AND user_id = ?`;