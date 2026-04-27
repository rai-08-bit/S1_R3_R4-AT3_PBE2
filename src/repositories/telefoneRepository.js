// import { connection } from '../configs/Database.js';

// const telefoneRepository = {
//     criar: async (telefone) => {
//         const sql = 'INSERT INTO telefones (Numero, Id_cliente) VALUES (?,?);';
//         const values = [telefone.numero, telefone.idCliente];
//         const [rows] = await connection.execute(sql, values);
//         return rows;
//     },
//     editar: async (telefone) => {
//         const sql = 'UPDATE telefones SET Numero=?, Id_cliente=? WHERE Id=?;';
//         const values = [telefone.numero, telefone.idCliente];
//         const [rows] = await connection.execute(sql, values);
//         return rows;
//     },
//     selecionar: async () => {
//         const sql = 'SELECT * FROM telefones;';
//         const [rows] = await connection.execute(sql);
//         return rows;
//     },
//     deletar: async (id) => {
//         const sql = 'DELETE FROM telefones WHERE Id=?;';
//         const values = [id];
//         const [rows] = await connection.execute(sql, values);
//         return rows;
//     }
// }

// export default telefoneRepository;